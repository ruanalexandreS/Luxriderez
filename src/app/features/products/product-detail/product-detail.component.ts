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
  
  // Armazena as seleções (ex: { Color: 'Negro', Capacidad: '20000mAh' })
  selectedOptions: { [key: string]: string } = {}; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe(p => {
      this.product = p;
      this.currentIndex = 0;
      
      this.selectedOptions = {};
      p?.options?.forEach(opt => {
        this.selectedOptions[opt.label] = opt.values[0];
      });
    });
  }

  onClose() {
    this.productService.closeDetail();
  }

  selectOption(label: string, value: string) {
    this.selectedOptions[label] = value;
  }

  getWhatsAppLink(): string {
    if (!this.product) return '';

    const phoneNumber = '573105891725';
    
    const optionsText = Object.entries(this.selectedOptions)
      .map(([label, val]) => `${label}: ${val}`)
      .join(', ');

    const messageDetails = optionsText ? ` (${optionsText})` : '';
    const message = `Hola! Quiero comprar la ${this.product.name}${messageDetails} en Luxriderez.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  // Lógica de carrossel (Imagens + Vídeo com som)
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