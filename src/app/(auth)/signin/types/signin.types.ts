// export interface SignIn {
//     mobile:string
// }


// we can use type in zod insted od definiton type seperaty
import {z} from 'zod';
import { signInSchema } from './signin-schema';
export type SignIn = z.infer<typeof signInSchema>