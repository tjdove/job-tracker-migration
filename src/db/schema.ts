import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, foreignKey, primaryKey, bigint, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const job = mysqlTable("job", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	userId: bigint("user_id", { mode: "number" }).notNull().references(() => user.id),
	name: varchar("name", { length: 50 }),
	description: varchar("description", { length: 256 }),
},
(table) => {
	return {
		userId: index("user_id").on(table.userId),
		jobId: primaryKey(table.id),
	}
});

export const user = mysqlTable("user", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	firstName: varchar("first_name", { length: 256 }),
	lastName: varchar("last_name", { length: 256 }),
	addr1: varchar("addr1", { length: 256 }),
	addr2: varchar("addr2", { length: 256 }),
	city: varchar("city", { length: 256 }),
	state: varchar("state", { length: 2 }),
	zip: varchar("zip", { length: 16 }),
},
(table) => {
	return {
		userId: primaryKey(table.id),
	}
});

export const userRole = mysqlTable("user_role", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	userId: bigint("user_id", { mode: "number" }).notNull().references(() => user.id),
	title: varchar("title", { length: 50 }),
	description: varchar("description", { length: 256 }),
},
(table) => {
	return {
		userId: index("user_id").on(table.userId),
		userRoleId: primaryKey(table.id),
	}
});