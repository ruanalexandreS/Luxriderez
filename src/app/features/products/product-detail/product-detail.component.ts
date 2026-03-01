import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.interface';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  currentIndex = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe(p => {
      this.product = p;
      this.currentIndex = 0;
    });
  }

  onClose() {
    this.productService.closeDetail();
  }

  getWhatsAppLink(): string {
    if (!this.product) return '';

    const phoneNumber = '573105891725';
    const message = `Hola! Quiero comprar la ${this.product.name} en Luxriderez.`;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  nextMedia() {
    if (this.product) {
      const totalMedia = (this.product.video ? 1 : 0) + this.product.images.length;
      this.currentIndex = (this.currentIndex + 1) % totalMedia;
    }
  }

  prevMedia() {
    if (this.product) {
      const totalMedia = (this.product.video ? 1 : 0) + this.product.images.length;
      this.currentIndex = (this.currentIndex - 1 + totalMedia) % totalMedia;
    }
  }
}