import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';

import { BookManageComponent } from './book-manage/book-manage.component';

import { ShareModule } from 'src/app/shared/shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommonService } from '../util/common.service';

@NgModule({
  declarations: [BookManageComponent, BookDetailComponent],
  imports: [CommonModule, ShareModule, BookRoutingModule],
  providers: [CommonService],
})
export class BookModule {}
