import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManageComponent } from './book-manage/book-manage.component';

const routes: Routes = [
  {
    path: 'manage',
    component: BookManageComponent,
  },
  {
    path: 'detail',
    component: BookDetailComponent,
  },
  {
    path: '',
    component: BookManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
