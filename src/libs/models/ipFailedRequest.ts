import { IVerificator } from "./IVerificator";

export class IpFailedRequest implements IVerificator{

    private static instance: IpFailedRequest | null = null;
    private MAX_FAILED_ATTEMPTS = 3;
    private blockedIPs: { [ip: string]: number } = {};
    private constructor(){}

    public static getInstance(): IpFailedRequest {
        if (!IpFailedRequest.instance) {
            IpFailedRequest.instance = new IpFailedRequest();
        }
        return IpFailedRequest.instance;
    }

    verify(ipDetails:{ip:string, logged:boolean}) {        
        if ( !ipDetails.logged && this.blockedIPs[ipDetails.ip] == undefined) {
            this.blockedIPs[ipDetails.ip] = 1;
            throw 'Not authorized'
        }else if(!ipDetails.logged && this.blockedIPs[ipDetails.ip] < 3){
            this.blockedIPs[ipDetails.ip] ++;
            throw 'Not authorized'
        }
    
        if ( this.blockedIPs[ipDetails.ip] >= 3) throw 'Access has been denied'
    }
}