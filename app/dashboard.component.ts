import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/style/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }
    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Hero){
        console.log("goto detial...")
        let link = ['/detail', hero.id ];
        this.router.navigate(link);
    }

}