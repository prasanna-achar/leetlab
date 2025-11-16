import Judge0 from "../libs/Judge0.js";

export default class ExecutionController{
    static executeCode = async (req, res) =>{
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

            const submissions = stdin.map((input) =>{
                
                return {
                    source_code,
                    language_id,
                    stdin: input
                }
            })


            const submitResponse = await Judge0.submitBatch(submissions)


            const tokens = submitResponse["data"].map((rs) => rs.token)

            const results = await Judge0.pollBatch(tokens)


            let allPassed = true;
            
            const detailedResults = results.map((result, i) =>{
                const actualOutput = result.stdout?.trim()
                const expected_output = expected_outputs[i]?.trim()
                const passed = actualOutput === expected_output;
                result.stdout = result.stdout?.trim()
                result.stdin = stdin[i]
                result.expected_output = expected_outputs[i]?.trim()
                result.passed = passed;
                console.log(`Testcase #${i+1}`);
                console.log(`Stdin : ${stdin[i]}`);
                console.log(`Expected output: ${expected_output}`);
                console.log(`Actual Output: ${actualOutput}`);
                console.log(`Passed : ${passed}`);
                if(!passed) allPassed = false
                
                return result
            })
            
            console.log(`All Result together ${allPassed}`);

            res.status(200).json({
                success: true,
                message:"code executed",
                error:null,
                results:detailedResults,
                allPassed
            })
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error in Executing Code"
            })
        }
    }
}