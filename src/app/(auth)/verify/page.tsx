import VerificationForm from "./components/verification-form";

export default async function Verification(
    {searchParams} : {searchParams : {[key:string]:string | string[] | undefined}}
){
    
 
    return <VerificationForm mobile={searchParams['mobile'] as string} />
}