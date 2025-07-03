import { create } from "zustand";
import axiosInstance from "../libs/axios";
import toast from "react-hot-toast";

const useExecutionStore = create((set) =>({
    execution: null,
    isExecutionLoading: false,

    executeCode: async ({
                source_code,
                language_id,
                stdin,
                expected_outputs,
                problemId
            }) =>{
        try {
            set({isExecutionLoading: true})
            const res = await axiosInstance.post("/execute-code", {
                source_code,
                language_id,
                stdin,
                expected_outputs,
                problemId
            })
            console.log(res.data)
            set({execution: res.data})
        } catch (error) {
            console.log("Error in execution\n", error.message)
        }finally{
            set({isExecutionLoading:false})
        }
    },
    setExecutionToNull :() =>{
        set({execution: null})
    },
      submitCode: async (
    {
      source_code,
      language_id,
      stdin,
      expected_outputs,
      problemId
    }
  ) =>{
    try {
      set({isExecutionLoading:true});
    const res = await axiosInstance.post("/submission",{
      source_code,
      language_id,
      stdin,
      expected_outputs,
      problemId
    })
    const executionData = res.data.results.testcaseresult
    set({execution: {
        results:[...executionData]
    }})
    toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error(res.data.message)
    }finally{
      set({isExecutionLoading:false})
    }
  },
}))
export default useExecutionStore