/*
  Warnings:

  - A unique constraint covering the columns `[playListId,problemId]` on the table `ProblemInPlayList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProblemInPlayList_playListId_problemId_key" ON "ProblemInPlayList"("playListId", "problemId");
