
import todo from "@/lib/models/todo.js";
import { NextResponse } from "next/server";
import connectDB from "../lib/config/db";

const loadDB = async ()=> {
    connectDB
}
loadDB()

export async function GET() {
  await connectDB();
  const t2 = await todo.find();
  return NextResponse.json({ message: "Data Fetch", t2 });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await todo.create({ title, description });
  return NextResponse.json({ message: "Submitted Successfully" });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted Successfully" });
}

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");

  await todo.findByIdAndUpdate(id, {
    $set: { isCompleted: true }
  });

  return NextResponse.json({
    message: "Todo updated successfully",
    success: true
  });
}
