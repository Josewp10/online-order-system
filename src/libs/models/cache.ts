import { IVerificator } from "./IVerificator";

export class Cache implements IVerificator{

    private static instance: Cache | null = null;
    private constructor(){}

    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    verify() {
        
    }
}