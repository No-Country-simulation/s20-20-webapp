import { AuthService } from "@/app/(api)/services/authService";
import { IUserRequest } from "@/app/(api)/types/user";
import { NextRequest } from "next/server";

const authService = new AuthService();
export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const user: IUserRequest = {
    user: {
      email: data.email,
      password: data.password,
    },
    client: {
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      birthday: data.birthday,
      address: data.address,
      image: data.image,
    },
  };
  return await authService.register(user);
};
