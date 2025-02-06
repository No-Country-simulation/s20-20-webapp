import { prisma } from "@/app/libs/prisma";
import { IClient } from "../types/user";

export class ClientRepository {
  async saveClient(data: IClient) {
    return await prisma.client.create({
      data: data,
    });
  }

  async getClientById(clientId: number) {
    return await prisma.client.findUnique({
      where: { id: clientId },
    });
  }

  async updateClient(clientId: number, data: Partial<IClient>) {
    return await prisma.client.update({
      where: { id: clientId },
      data: data,
    });
  }
}
