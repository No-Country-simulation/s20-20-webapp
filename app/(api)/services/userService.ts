import { HttpResponse } from "../utils/httpResponse";
import { IClient } from "../types/user";
import { UserRepository } from "../repositories/userRepository";
import { ClientRepository } from "../repositories/clientRepository";

export class UserService {
  private readonly userRepository = new UserRepository();
  private readonly clientRepository = new ClientRepository();

  private readonly httpResponse = new HttpResponse();

  async getUserById(userId: string) {
    try {
      const user = await this.userRepository.findUserById(userId);
      if (!user) return this.httpResponse.NotFound("No se encontró al usuario");
      const dataUser = await this.clientRepository.getClientById(user.clientId);
      if (!dataUser)
        return this.httpResponse.NotFound(
          "No se encontraron datos del usuario"
        );
      const result = {
        userId: user.id,
        email: user.email,
        ...dataUser,
      };
      return this.httpResponse.Ok(result);
    } catch (error) {
      return this.httpResponse.InternalServerError(error);
    }
  }

  async updateClient(userId: string, data: IClient) {
    try {
      const user = await this.userRepository.findUserById(userId);
      if (!user) return this.httpResponse.NotFound("No se encontró al usuario");
      const updateData = Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== undefined)
      );
      if (Object.keys(updateData).length === 0) {
        return this.httpResponse.BadRequest(
          "No se proporcionaron datos para actualizar."
        );
      }
      await this.clientRepository.updateClient(user.clientId, updateData);
      return this.httpResponse.Ok(
        "Se modificaron los campos del cliente correctamente"
      );
    } catch (error) {
      return this.httpResponse.InternalServerError(error);
    }
  }
}
