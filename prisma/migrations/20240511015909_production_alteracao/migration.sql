/*
  Warnings:

  - You are about to drop the `productions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "productions";

-- CreateTable
CREATE TABLE "production" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tickets" INTEGER NOT NULL,

    CONSTRAINT "production_pkey" PRIMARY KEY ("id")
);
