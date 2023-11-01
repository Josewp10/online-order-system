import { IVerificator } from "./IVerificator";

export class Authorizer implements IVerificator{
    verify() {
        return 'Authorization not implemented'
    }
}