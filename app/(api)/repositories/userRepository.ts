import { prisma } from "@/app/libs/prisma";

export class UserRepository {
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  }
}
