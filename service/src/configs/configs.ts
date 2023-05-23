import * as dotenv from "dotenv"
dotenv.config()

export const config = {
  DB_HOST: process.env.DB_HOST!,
  DB_PORT: Number(process.env.DB_PORT!),
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_NAME: process.env.DB_NAME!,
  SALT_STRING: process.env.SALT_STRING!,
  TOKEN_SECRET: process.env.TOKEN_SECRET!,
  TOKEN_REFRESH_SECRET: process.env.TOKEN_REFRESH_SECRET!,
}