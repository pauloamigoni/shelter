export abstract class CustomError {
    private readonly code: string;
    private readonly message: string;

    constructor(message: string, code: string) {
        this.message = message;
        this.code = code;
        throw new Error(JSON.stringify(this));
    }
}