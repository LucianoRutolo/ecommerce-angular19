import { Component, Signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent{
  protected product: Signal<Product | undefined>

  constructor(private _route: ActivatedRoute, private _productService: ProductService){
    const id = this._route.snapshot.paramMap.get('id')!;
    this.product = toSignal(this._productService.getProductById(id))
  }
}
