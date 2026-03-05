import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const movieTable = pgTable("movie", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name:varchar().notNull(),
  genre:varchar().notNull(),
  image:varchar().notNull(),
  description:varchar().notNull(),
  email:varchar().notNull()

});

export type Movie =  typeof movieTable.$inferSelect
export type NewMovie =  typeof movieTable.$inferInsert
