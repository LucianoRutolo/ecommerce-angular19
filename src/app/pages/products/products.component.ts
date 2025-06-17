import { Component, inject, Signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent{
  private _productService = inject(ProductService);
  protected products: Signal<Product[] | undefined> = toSignal(
    this._productService.getAllProducts()
  );
}
