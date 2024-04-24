
// ** import db
import db from "@/db";

// ** import Schema
import { chats } from "@/db/schema";

// ** import core package
import { NextResponse } from 'next/server'


// ** post single chat
export async function POST(req: Request) {
  const body = await req.json();
  
  const newChat = await db
    .insert(chats)
    .values({
      email: body.email,
      subject: body.subject,
      title: body.title,
      description: body.description,
    })
    .returning()
    .get();
    console.log({ newChat });

    return NextResponse.json(newChat, {status: 200})
}


// ** Get all chats
export async function GET(req: Request) {
  const chatsData = await db.query.chats.findMany();
  return NextResponse.json(chatsData, { status: 200 });
}