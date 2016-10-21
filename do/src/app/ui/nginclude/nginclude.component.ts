import { Component, OnInit,Input,ComponentResolver,ViewChild,ViewContainerRef } from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-nginclude',
  template: `<div #ngIncludeContent ></div>`,
  styleUrls: ['nginclude.component.css']
})
export class NgincludeComponent implements OnInit {
    @Input() src:any;
    private template:string;
    @ViewChild("ngIncludeContent",{read:ViewContainerRef})
    protected contentTarget:ViewContainerRef;
    newComponent:any;
    constructor(
    private compResolver:ComponentResolver){
    }
    ngOnInit(){
        this.newComponent = this.createContentComponent(this.src);
        this.compResolver.resolveComponent(this.newComponent)
        .then((factory:any)=>this.contentTarget.createComponent(factory))
    }
    createContentComponent(src){
        @Component({
            selector : 'ngincludecontent',
            templateUrl:src.url,
            directives:FORM_DIRECTIVES
        })
        class NgIncludeContentComponent{
            @Input() src:any;
            constructor(){
                this.src = src;
                this.src.loader = false;
            }
        }
        src.class = NgIncludeContentComponent;
        return src.class;        
    }
}
