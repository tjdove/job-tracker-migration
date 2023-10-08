import type { Config } from "drizzle-kit";
import "dotenv/config";
//console.log(process.env);

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_LOCAL_HOST!,
    user: process.env.DB_LOCAL_USERNAME,
    password: process.env.DB_LOCAL_PASSWORD,
    database: process.env.DB_LOCAL_DATABASE!,
  },
} satisfies Config;
