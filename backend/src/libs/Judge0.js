import axios from "axios"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class Judge0API{
    conn;
    constructor(conn){
        this.conn = conn;
    }
    getLanguagesId(language){
        const languageMap = {
            "JAVA" :62,
            "JAVASCRIPT": 63,
            "PYTHON":71
        }

        return languageMap[language.toUpperCase()] || undefined ;
    }

    getlanguageName(language_id){
        const languageMap = {
            62: "JAVA",
            63: "JAVASCRIPT",
            71: "PYTHON"
        }

        return languageMap[language_id]
    }
    async submitBatch(submissions){
        try {
            
            const data = await axios.post(`${this.conn}/submissions/batch?base64_encoded=false`, {
            submissions
            })

            console.log("--------------------------------\n",data.data,"\n-----------------------------------");

            return data;
        } catch (error) {
            console.log(error.message)
            throw error;
        }
    }

    async pollBatch(tokens){
        while(true){
            const {data} = await axios.get(`${this.conn}/submissions/batch`,{
                params:{
                    tokens: tokens.join(","),
                    base64_encoded: false
                }
            })

            const results = data.submissions

            const isAllDone = results.every(
                (r) => r.status.id !== 1 && r.status.id !== 2
            )
            if(isAllDone) return results

            await sleep(1000)
        }
    }
}

const Judge0 = new Judge0API(process.env.JUDGE0_API)

export default Judge0