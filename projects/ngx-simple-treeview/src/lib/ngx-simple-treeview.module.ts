import { NgModule } from '@angular/core';
import { NgxSimpleTreeviewComponent } from './ngx-simple-treeview.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContextMenuComponent } from './context-menu/context-menu.component';



@NgModule({
  declarations: [
    NgxSimpleTreeviewComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
    
  ],
  exports: [
    NgxSimpleTreeviewComponent
  ]
})
export class NgxSimpleTreeviewModule { }
