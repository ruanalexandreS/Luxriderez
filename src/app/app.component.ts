import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { TechnicalSpecsComponent } from './shared/components/technical-specs/technical-specs.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductListComponent,
    ProductDetailComponent,
    TechnicalSpecsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
}