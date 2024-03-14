import db from "@/db";
import { messages } from "@/db/schema";
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json();
  
  const newMessages = await db
    .insert(messages)
    .values({
      name: body.name,
      email: body.email,
      message: body.message,
    })
    .returning()
    .get();
    console.log({ newMessages });

    return NextResponse.json(newMessages, {status: 200})
}

export async function GET(req: Request) {
  const messagesData = await db.query.messages.findMany();
  return NextResponse.json(messagesData, { status: 200 });
}