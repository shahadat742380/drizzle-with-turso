import { randomUUID } from "crypto";
import { InferModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey(),
  external_id: text("external_id").notNull().unique().$default(()=>randomUUID()),
  name: text("name").default(""),
  email: text("email").default(""),
  subject: text("subject").notNull(),
  message: text("message").default(""),

  createdAt: text("created_at").default(sql`CURRENT_TIME`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIME`),
});

export type messages = InferModel<typeof messages>;
