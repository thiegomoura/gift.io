/*
  Warnings:

  - You are about to drop the column `received` on the `Gift` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gift" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT,
    "link" TEXT,
    "receivedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Gift" ("createdAt", "description", "id", "link", "receivedAt", "thumbnail", "title", "userId") SELECT "createdAt", "description", "id", "link", "receivedAt", "thumbnail", "title", "userId" FROM "Gift";
DROP TABLE "Gift";
ALTER TABLE "new_Gift" RENAME TO "Gift";
CREATE INDEX "Gift_userId_idx" ON "Gift"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
