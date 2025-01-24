import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export class AuthService {
  private readonly userRepository = new UserRepository();

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
}
