import { configDotenv } from "dotenv"
configDotenv()

export const PORT = Number(process.env.PORT) || 3000
export const JWT_SECRET = process.env.JWT_SECRET
export const SERVER_URL = process.env.SERVER_URL
export const CLIENT_URL = process.env.CLIENT_URL
export const APP_NAME = process.env.APP_NAME