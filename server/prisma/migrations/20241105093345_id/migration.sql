/*
  Warnings:

  - You are about to drop the column `value` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "value",
ADD COLUMN     "isVoted" BOOLEAN NOT NULL DEFAULT false;
