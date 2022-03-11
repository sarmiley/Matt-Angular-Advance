import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';

import { BookManageComponent } from './book-manage/book-manage.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommonService } from '../util/common.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [BookManageComponent, BookDetailComponent],
  imports: [CommonModule, SharedModule, BookRoutingModule, MaterialModule],
  providers: [CommonService],
})
export class BookModule {}
