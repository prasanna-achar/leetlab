import {PrismaClient} from "../generated/prisma/index.js"

const globalPrisma = globalThis

const db = globalPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalPrisma.prisma = db

export default db