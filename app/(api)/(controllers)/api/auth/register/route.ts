import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest): Promise<NextResponse<string>> => {
  const data = await req.json();
  console.log(data);
  return NextResponse.json("registranding..");
};
