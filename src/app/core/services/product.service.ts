import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // O 'BehaviorSubject' guarda o produto atual (começa vazio)
    private selectedProductSource = new BehaviorSubject<Product | null>(null);

    // Este Observable é o que o Modal vai 'assinar' para ficar vigiando mudanças
    selectedProduct$ = this.selectedProductSource.asObservable();

    // Função para abrir os detalhes
    openDetail(product: Product) {
        this.selectedProductSource.next(product);
    }

    // Função para fechar os detalhes
    closeDetail() {
        this.selectedProductSource.next(null);
    }
}