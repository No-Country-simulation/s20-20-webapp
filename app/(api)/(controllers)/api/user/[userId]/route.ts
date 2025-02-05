import { IClient } from "@/app/(api)/types/user";
import { NextRequest } from "next/server";
import { UserService } from "../../../../services/userService";

const userService = new UserService();

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const userId = (await params).userId;
  return await userService.getUserById(userId);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const userId = (await params).userId;
  const data: IClient = await req.json();
  return await userService.updateClient(userId, data);
};
