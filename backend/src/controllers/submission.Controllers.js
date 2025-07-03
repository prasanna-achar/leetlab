import Judge0 from "../libs/Judge0.js";
import db from '../libs/db.js'

export default class SubmissionController{
    static submitCode = async (req, res) =>{
        try {
           
            const {source_code, 
                    language_id, 
                    stdin,
                    expected_outputs,
                    problemId} = req.body;

            const userId = req.user.id;

            if( 
                !Array.isArray(stdin) ||
                stdin.length === 0 ||
                !Array.isArray(expected_outputs) ||
                expected_outputs.length !== stdin.length
            ){
                return res.status(400).json({
                    status:400, 
                    success: false,
                    error: null,
                    message: `Invalid Test cases`
                })
            }

            const submissions = stdin.map((input) =>({
                source_code,
                language_id,
                stdin:input,
            }))

            const submitResponse = await Judge0.submitBatch(submissions)

            const tokens = submitResponse.data.map((rs) => rs.token)


            const results = await Judge0.pollBatch(tokens)


            console.log(`Result --------`);
            console.log(results);

            let allPassed = true;
            
            const detailedResults = results.map((result, i) =>{
                const actualOutput = result.stdout?.trim()
                const expected_output = expected_outputs[i]?.trim()
                const passed = actualOutput === expected_output;
                console.log(`Testcase #${i+1}`);
                console.log(`Stdin : ${stdin[i]}`);
                console.log(`Expected output: ${expected_output}`);
                console.log(`Actual Output: ${actualOutput}`);
                console.log(`Passed : ${passed}`);
                if(!passed) allPassed = false

                return {
                    testCase : i + 1,
                    passed,
                    stdout: actualOutput,
                    expectedOutput: expected_output,
                    stderr: result.stderr || null,
                    compile_output : result.compile_output || null,
                    status: result.status,
                    memory: result.memory? `${result.memory} KB` : undefined,
                    time: result.time? `${result.time} s` : undefined
                }
            })
            
            console.log(`All Result together ${allPassed}`);
            const language = Judge0.getlanguageName(language_id)
            const submission = await db.submission.create({
                data:{
                    userId,
                    problemId,
                    sourceCode:{
                        language: language,
                        code: source_code
                    },
                    stdin: stdin.join("\n"),
                    stdout: JSON.stringify(detailedResults.map((r) => r.stdout)),
                    stderr: detailedResults.some((r)=> r.stderr)?
                    JSON.stringify(detailedResults.some((r)=> r.stderr)) : 
                    null,
                    compileOutput:  detailedResults.some((r)=> r.compile_output)?
                    JSON.stringify(detailedResults.some((r)=> r.compile_output)) : 
                    null,
                    status: allPassed ? "Accepted" : "Wrong Answer",
                    memory: detailedResults.some((r)=> r.memory)?
                    JSON.stringify(detailedResults.map((r)=> r.memory)) : 
                    null,
                    time: detailedResults.some((r)=> r.time)?
                    JSON.stringify(detailedResults.map((r)=> r.time)) : 
                    null,
                }
            })

            if(allPassed){
                await db.problemSolved.upsert({
                    where:{
                        userId_problemId : {
                            userId, problemId
                        }
                    },
                    update:{},
                    create:{
                        userId: userId, problemId: problemId
                    }
                })
            }
            const testCasesResults = detailedResults.map((result) => ({
                submissionId : submission.id,
                testcase: result.testCase,
                passed: result.passed,
                stdout: result.stdout ,
                expectedOutput: result.expectedOutput,
                stderr: result.stderr ,
                compiledOutput:result.compile_output ,
                status: result.status.description,
                memory:result.memory,
                time:result.time

            }))

            console.log(testCasesResults)
            const testcase = await db.TestCaseResult.createMany({
                data: testCasesResults
            })

            const submisiionWithTestCases = await db.submission.findUnique({
                where:{
                    id: submission.id
                },
                include:{
                    testcaseresult: true
                }
            })

            
            res.status(200).json({
                success: true,
                message:"code executed",
                error:null,
                results: submisiionWithTestCases
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: error.message
            })
        }
    }
    static getSubmissions = async (req, res) =>{
        try {
            const userId = req.user.id 
            const allSubmissions =  await db.submission.findMany({
                where: {
                    userId
                }
            })

            res.status(200).json({
                success: true,
                message:"Fetched all the submissions",
                error:null,
                results: allSubmissions
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: error.message
            })
        }
    }
    static getSubmission = async (req, res) =>{
        try {
            const userId = req.user.id
            const problemId = req.params.problemId
            const submissions = await db.submission.findMany({
                where:{
                    userId: userId, 
                    problemId: problemId
                }
            })
             res.status(200).json({
                success: true,
                message:"Fetched all the submissions for problem",
                error:null,
                results: submissions
            })

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: error.message
            })
        }
    }
    static getSubmissionCount = async(req, res) =>{
        try {
            const userId = req.user.id
            const problemId = req.params.problemId
            const submissionsCount = await db.submission.count({
                where:{
                    userId, 
                    problemId
                }
            })
             res.status(200).json({
                success: true,
                message:"Fetched all the submissions for problem",
                error:null,
                results: submissionsCount
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: error.message
            })
        }
    }
}