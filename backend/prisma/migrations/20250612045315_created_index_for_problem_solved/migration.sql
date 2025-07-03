-- DropIndex
DROP INDEX "problemSolved_userId_problemId_key";

-- CreateIndex
CREATE INDEX "problemSolved_userId_problemId_idx" ON "problemSolved"("userId", "problemId");
