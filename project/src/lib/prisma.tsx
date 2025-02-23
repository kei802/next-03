// Next.jsの開発環境にて、ホットリロードされることにより複数のPrismaClientインスタンスが生成される問題を解決するためのライブラリ
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ["query", "info", "warn", "error"] });

if(process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}