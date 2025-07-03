import {z} from "zod"
class AuthService {

    static SignUpSchema =  z.object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(6, "Password must contain 6 characters"),
        name:z.string().min(3, "Name must contain 3 charcaters")
    })

    static LoginSchema =  z.object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(6, "Password must contain 6 characters"),
    })

    
}


export default AuthService;