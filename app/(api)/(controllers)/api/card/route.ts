import { CardService } from "@/app/(api)/services/cardService";
import { ICard } from "@/app/(api)/types/card";
import { NextRequest } from "next/server";

const cardService = new CardService();
export const POST = async (req: NextRequest) => {
  const data: ICard = await req.json();
  return await cardService.saveCard(data);
};
