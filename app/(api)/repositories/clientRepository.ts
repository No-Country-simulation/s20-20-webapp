import { prisma } from "@/app/libs/prisma";
import { IClient } from "../types/user";

export class ClientRepository {
  async saveClient(data: IClient) {
    return await prisma.client.create({
      data: data,
    });
  }
}
