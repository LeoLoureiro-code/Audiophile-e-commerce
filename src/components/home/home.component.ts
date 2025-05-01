import { Component } from '@angular/core';
import { CategoryOptionsComponent } from "../category-options/category-options.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CategoryOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
