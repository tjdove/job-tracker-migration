import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  bigint,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const user = mysqlTable(
  "user",
  {
    id: bigint("id", { mode: "number" }).autoincrement().notNull(),
    fullName: varchar("full_name", { length: 256 }),
  },
  (table) => {
    return {
      usersId: primaryKey(table.id),
    };
  }
);
