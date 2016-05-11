import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable }     from 'rxjs/Observable';
import { Login }    from './login';

@Injectable()
export class HeroService {

    constructor (private http: Http) {}

    getHeroes() {
        //异步链式调用
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    dologin(login:Login): Observable<Login>{

        let body = JSON.stringify(login );
        let headers = new Headers({ 'Content-Type': 'application/application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body+"---------")
        return this.http.post("http://localhost:8080/spring/auth/login", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response):Observable {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        console.log(body)
        return new Observable(body.data || { });
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}