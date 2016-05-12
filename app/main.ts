import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';


bootstrap(AppComponent,[HTTP_PROVIDERS,Title]);