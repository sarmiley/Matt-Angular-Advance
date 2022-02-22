import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';

import { BookManageComponent } from './book-manage/book-manage.component';

import { ShareModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    BookManageComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    BookRoutingModule
  ]
})
export class BookModule { }
