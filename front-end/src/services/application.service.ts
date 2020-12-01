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
    constructor(private http: HttpClient) { }

    public getVersion(): Observable<string> {
        return this.http.get(this.apiUrl + '/GetVersion', { responseType: 'text' })
            .pipe(map((res: string) => res));
    }
}