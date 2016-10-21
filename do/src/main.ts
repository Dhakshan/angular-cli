import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { DoAppComponent, environment } from './app/';
import {HTTP_PROVIDERS, HTTP_BINDINGS,ConnectionBackend, XSRFStrategy} from '@angular/http';
environment.production = true;
if (environment.production) {
  enableProdMode();
}

bootstrap(DoAppComponent,[HTTP_PROVIDERS,HTTP_BINDINGS,ConnectionBackend,XSRFStrategy]);
