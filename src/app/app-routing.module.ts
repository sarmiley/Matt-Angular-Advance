import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./module/book/book.module').then(m => m.BookModule)
      },
      {
        path: 'member',
        loadChildren: () => import('./module/member/member.module').then(m => m.MemberModule)
      },
    ]
  },
  {
    path:'public',
    children: [
      { 
        path: 'home',
        loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) 
      },
      {
        path: 'auth',
        loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
