import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';

import { HeroService }     from './hero.service';
import { Config,CONFIG } from './app-config';
import {HighlightDirective} from './highlight.directive'
import { LoginFormComponent } from './login-form.component'
import { DynamicForm }     from './dynamic-form/dynamic-form.component';
import { HeroFormComponent } from './hero-form.component'
import { QuestionService } from './dynamic-form/question.service';

import { Title } from '@angular/platform-browser';

export let APP_CONFIG = new OpaqueToken('app.config');

import {  ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: ['app/style/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeroFormComponent, HighlightDirective, LoginFormComponent, DynamicForm],
    providers: [
        HeroService,
        provide(APP_CONFIG, {useValue: CONFIG}), QuestionService
    ]
})


export class AppComponent {
    title
    questions:any[]

    constructor(@Inject(APP_CONFIG) config:Config, service:QuestionService, private titleService:Title) {
        this.title = config.title
        this.questions = service.getQuestions()
        titleService.setTitle(config.apiEndpoint)
    }

}

