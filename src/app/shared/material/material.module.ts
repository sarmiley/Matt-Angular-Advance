import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  exports: [DragDropModule, MatButtonModule, MatCardModule, MatSlideToggleModule, MatTableModule, MatTabsModule],
})
export class MaterialModule {}
