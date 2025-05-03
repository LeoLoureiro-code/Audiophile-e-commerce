import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CategoryOptionsComponent } from "../category-options/category-options.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [HeaderComponent, CategoryOptionsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
