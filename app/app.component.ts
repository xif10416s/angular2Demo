import { Component ,Provider,Inject,OpaqueToken}       from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component'
import { Config,CONFIG } from './app-config';
import {HighlightDirective} from './highlight.directive'
import { LoginFormComponent } from './login-form.component'

export let APP_CONFIG = new OpaqueToken('app.config');


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/style/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeroFormComponent , HighlightDirective,LoginFormComponent],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        new Provider(APP_CONFIG, {useValue: CONFIG},HTTP_PROVIDERS)
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])

export class AppComponent {
    title
    constructor(@Inject(APP_CONFIG) config: Config){
        this.title = config.title
    }

}

