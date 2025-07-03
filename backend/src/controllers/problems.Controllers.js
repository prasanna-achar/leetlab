import Judge0 from "../libs/Judge0.js";
import db from "../libs/db.js";

export default class ProblemsController{
    static createProblem = async (req, res) =>{
        const {title, 
            description,
            difficulty,
            tags,
            examples,
            constraints,
            testcases,
            codeSnippet,
            referenceSolution,
            hints, editorial
        } = req.body;

        
        if(req.user.userRole !== "ADMIN"){
            return res.status(403).json({
                status:403, 
                    success: false,
                    error: null,
                    message: "Access denied - Admins Only PC",
                    user: req.user.email,
                    role: req.user.userRole
            })
        }

        try {
            for(let [language, solutionCode] of Object.entries(referenceSolution)){
                const languageId = Judge0.getLanguagesId(language);

                if(!languageId){
                    return res.status(400).json({
                        status:400, 
                        success: false,
                        error: null,
                        message: `${language} is not supportable in this platform`
                    })
                }

                console.log(testcases);
                
                const submissions = testcases.map(({input, output}) =>({
                    source_code: solutionCode,
                    language_id: languageId,
                    stdin: input,
                    expected_output: output
                }))
                
                const submissionResults = await Judge0.submitBatch(submissions)

                console.log("submissionResults :\n", submissionResults.data);
                
                const tokens = submissionResults["data"].map((result) => result.token)

                const results = await Judge0.pollBatch(tokens)


                // const detailedResults = results.map((result, i) =>{
                //     const actualOutput = result.stdout?.trim()
                //     const expected_output = expected_outputs[i]?.trim()
                //     const passed = actualOutput === expected_output;
                //     result.stdout = result.stdout.trim()
                //     result.stdin = stdin[i]
                //     result.expected_output = expected_outputs[i]?.trim()
                //     console.log(`Testcase #${i+1}`);
                //     console.log(`Stdin : ${stdin[i]}`);
                //     console.log(`Expected output: ${expected_output}`);
                //     console.log(`Actual Output: ${actualOutput}`);
                //     console.log(`Passed : ${passed}`);
                //     if(!passed) allPassed = false
                    
                //     return result
                // })

                for(let i = 0; i <  results.length; i++){
                    const result = results[i];
                    console.log("Results:----------", result);
                    
                    if(result.status.id !== 3){
                        return res.status(400).json({
                            status:400, 
                            success: false,
                            error: null,
                            message: `Testcase ${i+1} failed for language ${language}`
                        })
                    }
                }
            }
            const newProblem = await db.problem.create({
            data: {
                title,
                description,
                difficulty,
                tags,
                examples,
                constraints,
                testcases,
                codeSnippet,
                referenceSolution,
                hints: hints || null, 
                editorial:editorial|| null,
                userId: req.user.id,
            },
            });

            return res.status(201).json({
                sucess: true,
                message: "Problem Created Successfully",
                problem: newProblem,
                
            });
        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in Creating Problem"
            })
        }
    }

    static getAllProblems = async(req, res) =>{
        try {
            const Problems = await db.problem.findMany({
                include:{
                    problemSolved:{
                        where:{
                            userId: req.user.id
                        }
                    }
                }
            })

            if(!Problems){
                return res.status(404).json({
                        status:404, 
                        success: false,
                        error: null,
                        message: `Problems are not available`
                    })
            }

            res.status(200).json({
                status:200, 
                    success: true,
                    error: null,
                    message: "Problem fetched Successfully",
                    problems: Problems
            })

        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in getting problem"
            })
        }
    }

    static getProblem = async (req, res) =>{
        try {
            const {id}= req.params

            const problem = await db.problem.findUnique({
                where:{
                    id
                }
            })

            if(!problem){
                return res.status(404).json({
                    status:404, 
                        success: false,
                        error: null,
                        message: `Problem not found`
                })
            }

            res.status(200).json({
                status:200, 
                    success: true,
                    error: null,
                    message: "Problem fetched Successfully",
                    problem : problem
            })
        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in getting problem"
            })
        }
    }

    

    static updateProblem = async (req, res) =>{
        try {
            const {id} = req.params

            const problem = await db.problem.findUnique({
                where:{
                    id
                }
            })

            if(!problem){
                return res.status(404).json({
                    status:404, 
                        success: false,
                        error: null,
                        message: `Problem not found`
                })
            }
            const {title, 
            description,
            difficulty,
            tags,
            examples,
            constraints,
            testcases,
            codeSnippet,
            referenceSolution
        } = req.body;

        
        if(req.user.userRole !== "ADMIN"){
            return res.status(403).json({
                status:403, 
                    success: false,
                    error: null,
                    message: "Access denied - Admins Only PC",
                    user: req.user.email,
                    role: req.user.userRole
            })
        }
        for(let [language, solutionCode] of Object.entries(referenceSolution)){
                const languageId = Judge0.getLanguagesId(language);

                if(!languageId){
                    return res.status(400).json({
                        status:400, 
                        success: false,
                        error: null,
                        message: `${language} is not supportable in this platform`
                    })
                }

                console.log(testcases);
                
                const submissions = testcases.map(({input, output}) =>({
                    source_code: solutionCode,
                    language_id: languageId,
                    stdin: input,
                    expected_output: output
                }))
                
                const submissionResults = await Judge0.submitBatch(submissions)

                console.log(submissionResults);
                
                const tokens = submissionResults.map((res) => res.token)

                const results = await Judge0.pollBatch(tokens)

                for(let i = 0; i <  results.length; i++){
                    const result = results[i];
                    console.log("Results:----------", result);
                    
                    if(result.status.id !== 3){
                        return res.status(400).json({
                            status:400, 
                            success: false,
                            error: null,
                            message: `Testcase ${i+1} failed for language ${language}`
                        })
                    }
                }
            }
            const newProblem = await db.problem.update({
                where:{
                    id
                },
                data: {
                    title,
                    description,
                    difficulty,
                    tags,
                    examples,
                    constraints,
                    testcases,
                    codeSnippet,
                    referenceSolution,
                    userId: req.user.id,
                },
                });

            return res.status(203).json({
                sucess: true,
                message: "Message Updated Successfully",
                problem: newProblem,
            });
        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in Updating Problem"
            })
        }
    }

    static deleteProblem = async (req, res) =>{
        try {
            const {id} = req.params

            const problem = await db.problem.findUnique({
                where:{
                    id
                }
            })

            if(!problem){
                return res.status(404).json({
                    status:404, 
                        success: false,
                        error: null,
                        message: `Problem not found`
                })
            }

            const message = await db.problem.delete({
                where:{
                    id
                }
            })

            res.status(200).json({
                status:200, 
                    success: true,
                    error: null,
                    message: message
            })
        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in deleting Problem"
            })
        }
    }
//  TODO : Complete this
    static getSolvedProblems = async (req, res) =>{
        try {
            const userId = req.user.id;

            const solvedProblems = await db.problemSolved.findMany({
                where:{
                    userId
                }, 
                }
            )

            if(!solvedProblems){
                return res.status(400).json({
                    success: false,
                    error: null,
                    message: "Can't find the problems solved by user"
                })
            }

            res.status(200).json({
                success: true,
                error: null,
                message: "Successfullt fetched the Solved problems",
                solvedProblems
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                success: false,
                error: error.message,
                message:"Error in getting solved problems"
            })
        }
    }
}