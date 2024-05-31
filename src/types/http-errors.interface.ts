

interface Problem {
    title:string;
    status: number;
    detail?:string;
    errors?:Record<string, string[]>
}


interface BadRequestError extends Problem {} //400
interface UnauthorizedError extends Problem {} //403 token is valid but user cannot accsess specific section => 401  tokrn not valid 
interface ValidationError extends Problem {} // 400 but have errors property 
interface NotFoundError extends Problem {} // 404 api not found
interface UnhandledException extends Problem {} // 500 
interface NetworkError extends Problem {} //

export type {
    Problem,
    BadRequestError,
    UnauthorizedError,
    ValidationError,
    NotFoundError,
    UnhandledException,
    NetworkError
};







