import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component'
import { Config,CONFIG } from './app-config';
import {HighlightDirective} from './highlight.directive'
import { LoginFormComponent } from './login-form.component'
import { DynamicForm }     from './dynamic-form/dynamic-form.component';
import { QuestionService } from './dynamic-form/question.service';
import { MdCheckBox } from './ag2-Material/checkbox.component';
import { Title } from '@angular/platform-browser';

export let APP_CONFIG = new OpaqueToken('app.config');


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/style/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeroFormComponent, HighlightDirective, LoginFormComponent, DynamicForm,MdCheckBox],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        provide(APP_CONFIG, {useValue: CONFIG}), QuestionService
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
    },
    {
        path: '/mdcheckbox',
        name: 'Mdcheckbox',
        component: MdCheckBox
    }
])

export class AppComponent {
    title
    questions:any[]
    constructor(@Inject(APP_CONFIG) config:Config , service: QuestionService,private titleService: Title) {
        this.title = config.title
        this.questions=service.getQuestions()
        titleService.setTitle(config.apiEndpoint)
    }

}

