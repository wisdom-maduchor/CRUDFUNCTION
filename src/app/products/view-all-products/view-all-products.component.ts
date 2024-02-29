import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {
  productList: Product | any;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.productList = data;
    });
  }
}
