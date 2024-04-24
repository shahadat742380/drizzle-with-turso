// ** import db
import db from "@/db";

// ** import schema
import { messages } from "@/db/schema";

// ** import core package
import { NextResponse } from 'next/server'


// ** Post single Messages
export async function POST(req: Request) {
  const body = await req.json();
  
  const newMessages = await db
    .insert(messages)
    .values({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    })
    .returning()
    .get();
    // console.log({ newMessages });

    return NextResponse.json(newMessages, {status: 200})
}


// ** Get all messages
export async function GET(req: Request) {
  const messagesData = await db.query.messages.findMany();
  return NextResponse.json(messagesData, { status: 200 });
}

