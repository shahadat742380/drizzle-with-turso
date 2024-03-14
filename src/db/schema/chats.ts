import { randomUUID } from "crypto";
import { InferModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const chats = sqliteTable("chats", {
  id: integer("id").primaryKey(),
  external_id: text("external_id").notNull().unique().$default(()=>randomUUID()),
  email: text("email").default(""),
  subject: text("subject").default(""),
  title: text("title").default(""),
  description: text("description").default(""),

  attributes: text("attributes", { mode: "json" }).default("{}"),

  createdAt: text("created_at").default(sql`CURRENT_TIME`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIME`),
});

export type chats = InferModel<typeof chats>;
