import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-info-modal-component',
  templateUrl: './product-info-modal-component.component.html',
  styleUrls: ['./product-info-modal-component.component.scss']
})
export class ProductInfoModalComponentComponent implements OnInit {

  producto: any;
  dialogRef: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.producto = this.data
  }

}
