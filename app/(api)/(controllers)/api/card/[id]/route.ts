import { CardService } from "@/app/(api)/services/cardService";
import { NextRequest } from "next/server";

const cardService = new CardService();

export const GET = async (
  res: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = (await params).id;
  return await cardService.getCardById(id);
};
