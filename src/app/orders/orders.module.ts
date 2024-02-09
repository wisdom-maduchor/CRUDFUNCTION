import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOthersComponent } from './list-others/list-others.component';

@NgModule({
  declarations: [ListOthersComponent],
  imports: [CommonModule],
  exports: [ListOthersComponent],
})
export class OrdersModule {}
