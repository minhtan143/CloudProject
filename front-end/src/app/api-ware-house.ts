import { environment } from '../environments/environment';
export class ApiWareHouse {
    private domain: string;
    public get Domain(): string {
        return this.domain;
    }

    private protocol: string;
    public get Protocol(): string {
        return this.protocol;
    }

    private apiEndPoint: string;
    public get ApiEndPoint(): string {
        return this.apiEndPoint;
    }

    private appVersion: string;

    public get Version(): string {
        return this.appVersion;
    }

    constructor() {
        this.appVersion = '1.0.0.0';
        if (environment.production) {
            this.domain = 'kubedemo.hcmute.edu.vn';
            this.protocol = 'http://';
            this.apiEndPoint = 'localhost:4100/api/';
        }
        else {
            this.domain = 'kubedemo.hcmute.edu.vn';
            this.protocol = 'https://';
            this.apiEndPoint = 'localhost:44303/api/';
        }
    }
}