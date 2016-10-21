import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Http, Jsonp, HTTP_PROVIDERS } from "@angular/http";
import { Routes, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, OnActivate } from '@angular/router';
import { HomeComponent } from './+home';
import { AboutComponent } from './+about';
import "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'do-app',
  templateUrl: 'do.component.html',
  styleUrls: ['do.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})

@Routes([ 
  { path: '', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/about', component: AboutComponent }
])
export class DoAppComponent {
  title = 'DirectOwners.com';
  public global;
}
