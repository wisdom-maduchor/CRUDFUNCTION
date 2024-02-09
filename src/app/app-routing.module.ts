import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOthersComponent } from './orders/list-others/list-others.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'orders',
    component: ListOthersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
