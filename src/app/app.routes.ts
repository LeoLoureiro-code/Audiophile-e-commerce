import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CategoryComponent } from '../components/category/category.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'details', component: ProductDetailComponent },
];
