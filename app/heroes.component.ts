import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls: ['app/style/heroes.component.css' ]
    , directives: [HeroDetailComponent]
})


export class HeroesComponent  implements OnInit  {
    heroes: Hero[];
    selectedHero:Hero;
    title = 'Tour of Heroes';
    constructor(
        private router: Router,
        private heroService: HeroService) { }
    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        //异步调用，需要回调
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    trackByHeroes(index: number, hero: Hero) {
        return hero.id; }
}



