import { CardService } from "@/app/(api)/services/cardService";
import { NextRequest } from "next/server";

const cardService = new CardService();

export const GET = async (
  res: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const userId = (await params).userId;
  return await cardService.listCardsByUser(userId);
};
