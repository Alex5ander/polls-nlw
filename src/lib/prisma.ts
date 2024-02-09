import { PrismaClient } from '@prisma/client';
console.log(process.env);
const prisma = new PrismaClient({
  log: ['query'],
});
export { prisma };
