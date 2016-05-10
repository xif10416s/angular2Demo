import { Component, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.component.html',
    styleUrls:['app/style/hero-detail.component.css']
})
export class HeroDetailComponent  implements OnInit {
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}