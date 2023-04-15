import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SafePipe} from "./pipe/safe.pipe";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    SafePipe
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        SidebarComponent,
        SafePipe
    ]
})
export class SharedModule { }
