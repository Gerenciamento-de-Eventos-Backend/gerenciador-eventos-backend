-- CreateTable
CREATE TABLE "productions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "local" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tickets" INTEGER NOT NULL,

    CONSTRAINT "productions_pkey" PRIMARY KEY ("id")
);
