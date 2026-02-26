import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TechnicalSpecsComponent } from './shared/components/technical-specs/technical-specs.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LUX_PRODUCTS } from './core/data/products.data';
import { Product } from './core/models/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TechnicalSpecsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'luxriderez-site';
  
  products = LUX_PRODUCTS; 

  selectedProduct: Product | null = null;
  
  activeTab: 'specs' | 'trust' | 'details' = 'specs';

  openDetails(product: Product) {
    this.selectedProduct = product;
    this.activeTab = 'specs';
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}