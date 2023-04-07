import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SafePipe} from "./pipe/safe.pipe";



@NgModule({
  declarations: [
    SidebarComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        SidebarComponent,
        SafePipe
    ]
})
export class SharedModule { }
