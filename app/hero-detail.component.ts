import { Component, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
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
        private current: ActivatedRoute) {
    }

    ngOnInit() {
        this.current.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }
}