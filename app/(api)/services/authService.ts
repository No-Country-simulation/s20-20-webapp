import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { HttpResponse } from "../utils/httpResponse";
import { IUserRequest } from "../types/user";
import { prisma } from "@/app/libs/prisma";
import { ClientRepository } from "../repositories/clientRepository";

export class AuthService {
  private readonly userRepository = new UserRepository();
  private readonly clientRepository = new ClientRepository();
  private readonly httpResponse = new HttpResponse();

  async login(email: string, password: string) {
    try {
      const userFound = await this.userRepository.findUserByEmail(email);

      if (!userFound) {
        return null; // Usuario no encontrado
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        userFound.password
      );

      if (!isPasswordValid) {
        return null; // Contraseña incorrecta
      }

      // Devuelve el objeto esperado por NextAuth
      return {
        id: userFound.clientId.toString(),
        email: userFound.email,
      };
    } catch (error) {
      console.error("Error en AuthService login:", error);
      return null; // Error interno
    }
  }

  async register(data: IUserRequest) {
    try {
      const userFound = await this.userRepository.findUserByEmail(
        data.user.email
      );
      if (userFound)
        return this.httpResponse.BadRequest(
          "Ya existe un usuario con este correo"
        );
      const hashedPassword = await bcrypt.hash(data.user.password, 10);
      await prisma.$transaction(async () => {
        const client = await this.clientRepository.saveClient({
          ...data.client,
          birthday: new Date(data.client.birthday), // Asegúrate de que sea una fecha válida
        });
        const newUser = {
          email: data.user.email,
          password: hashedPassword,
          clientId: client.id,
        };
        await this.userRepository.saveUser(newUser);
      });
      return this.httpResponse.Ok("Se registro correctamente al usuario");
    } catch (error) {
      if (error instanceof Error) {
        return this.httpResponse.InternalServerError({
          name: error.name,
          message: error.message,
          stack: error.stack,
        });
      }
    }
  }
}
