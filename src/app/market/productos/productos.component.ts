import { Component, OnInit } from '@angular/core';
import { ProductsServices } from '../services/products.service';
import { ProductInfoModalComponentComponent } from './product-info-modal-component/product-info-modal-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(
    public productsService: ProductsServices,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProductosAll();
  }

  getProductosAll() {
    this.productsService.getproducts().subscribe({
      next: (response: any[]) => {
        this.productos = response;
      },
      error: (res: any) => {
        console.log(res.error);
      },
    });
  }

  openModal(producto: any) {
    const dialogRef = this.dialog.open(ProductInfoModalComponentComponent, {
      data: producto,
      width: '70%', 
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
