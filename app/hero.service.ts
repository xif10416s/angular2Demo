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

    dologin(login:Login): Observable<Response>{

        let body = JSON.stringify(login );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body+"---------")
        return this.http.post("spring/auth/login", body, options);

    }
}