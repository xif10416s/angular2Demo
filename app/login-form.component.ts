import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

import { Login }    from './login';
import { HeroService }    from './hero.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/templates/login-form.component.html'
})

export class LoginFormComponent {
    model:Login = new Login("","")
    submitted = false;
    constructor(
        private heroService: HeroService) { }
    onSubmit() {
        console.log(this.model+"-=")
        this.heroService.dologin(this.model)
        this.submitted = true;
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    active = true;

}