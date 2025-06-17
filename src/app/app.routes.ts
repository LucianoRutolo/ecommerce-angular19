import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
