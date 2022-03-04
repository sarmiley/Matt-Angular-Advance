import { SecRootRoutingModule } from './sec-root-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './components/test-view/test-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    TestViewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SecRootRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    TestViewComponent
  ]
})
export class SecRootModule { }
