import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './module/util/not-found/not-found.component';
import { BusyComponent } from './module/util/busy/busy.component';

const routes: Routes = [
  {
    path: 'public',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'dinner',
        loadChildren: () => import('./module/dinner/dinner.module').then((m) => m.DinnerModule),
      },
      {
        path: '',
        loadChildren: () => import('./module/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'book',
        loadChildren: () => import('./module/book/book.module').then((m) => m.BookModule),
      },
      {
        path: 'member',
        loadChildren: () => import('./module/member/member.module').then((m) => m.MemberModule),
      },
      {
        path: 'analytics',
        loadChildren: () => import('./module/analytics/analytics.module').then((m) => m.AnalyticsModule),
      },
      {
        path: '',
        loadChildren: () => import('./module/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'reg',
    children: [
      {
        path: '',
        loadChildren: () => import('./module/register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '500',
    component: BusyComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
