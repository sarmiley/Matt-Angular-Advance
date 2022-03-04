import { TestSecViewComponent } from './components/test-sec-view/test-sec-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        component: TestSecViewComponent
      },
      {
        path: '**',
        component: TestSecViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SecRootRoutingModule { }
