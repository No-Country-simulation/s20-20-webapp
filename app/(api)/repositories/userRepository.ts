import { prisma } from "@/app/libs/prisma";
import { IUser } from "../types/user";

export class UserRepository {
  async findUserById(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  }

  async saveUser(data: IUser) {
    if (data.clientId === undefined)
      throw new Error("El Id del cliente ese necesario");
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        clientId: data.clientId,
      },
    });
  }
}
