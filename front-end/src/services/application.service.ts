import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app/config';
import { PathController } from '../app/commons/consts/path-controller.const';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ApplicationService {
    apiUrl = Config.getPath(PathController.Application);
    homeApiUrl = Config.getPath(PathController.Home);
    constructor(private http: HttpClient) { }

    public getVersion(): Observable<string> {
        return this.http.get(this.apiUrl + '/GetVersion', { responseType: 'text' })
            .pipe(map((res: string) => res));
    }

    public randomInteger(min: number, max: number): Observable<number> {
        return this.http.get(this.homeApiUrl + '/RandomInteger/' + min + '/' + max)
            .pipe(map((res: number) => res));
    }

    public listRandomizer(input: string): Observable<string[]> {
        return this.http.get(this.homeApiUrl + '/ListRandomizer?input=' + encodeURIComponent(input))
            .pipe(map((res: string[]) => res));
    }

    public randomDecimal(): Observable<number> {
        return this.http.get(this.homeApiUrl + '/RandomDecimal')
            .pipe(map((res: number) => res));
    }

    public stringGenerator(
        stringCount: number,
        characterCount: number,
        digits: boolean,
        upperLetter: boolean,
        lowerLetter: boolean,
        allowDupplicate: boolean
    ): Observable<string[]> {
        return this.http
            .get(this.homeApiUrl +
                '/StringGenerator' +
                '?stringCount=' + stringCount +
                '&characterCount=' + characterCount +
                '&digits=' + digits +
                '&upperLetter=' + upperLetter +
                '&lowerLetter=' + lowerLetter +
                '&allowDupplicate=' + allowDupplicate)
            .pipe(map((res: string[]) => res));
    }
}