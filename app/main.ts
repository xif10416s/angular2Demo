import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MdCheckBox } from './ag2-Material/checkbox.component';

import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
export const routes:RouterConfig = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'mdcheckbox',
        component: MdCheckBox
    },
    {path: '', component: DashboardComponent}
]


bootstrap(AppComponent,[HTTP_PROVIDERS,Title,  provideRouter(routes)]);