import { IVerificator } from "./IVerificator";

export class IpFailedRequest implements IVerificator{
    verify() {
        console.log('IP Verified');
        
        throw 'IP not implemented yet'
    }
}