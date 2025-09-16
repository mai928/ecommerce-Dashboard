import { FetchAllProduct } from "@/StoreComponents/FetchAllProduct";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const products = await FetchAllProduct();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
