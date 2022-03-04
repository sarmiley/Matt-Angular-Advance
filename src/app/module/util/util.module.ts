import { BusyComponent } from './busy/busy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './common.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent, BusyComponent],
  imports: [CommonModule, RouterModule],
  exports: [NotFoundComponent, BusyComponent],
  providers: [CommonService],
})
export class UtilModule {}
