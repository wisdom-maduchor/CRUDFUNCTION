import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'view-all-products', component: ViewAllProductsComponent },
  {
    path: 'view-all-product-by-category',
    component: ViewAllProductsByCategoryComponent,
  },
  {
    path: 'view-all-product-by-date',
    component: ViewAllProductsByDateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
