-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "sourceCode" JSONB NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestCaseResult" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "testcase" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "stdout" TEXT,
    "expectedOutput" TEXT NOT NULL,
    "stderr" TEXT,
    "compiledOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,

    CONSTRAINT "TestCaseResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problemSolved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "problemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TestCaseResult_submissionId_idx" ON "TestCaseResult"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "problemSolved_userId_problemId_key" ON "problemSolved"("userId", "problemId");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCaseResult" ADD CONSTRAINT "TestCaseResult_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
