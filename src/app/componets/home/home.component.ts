import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CurrencyPipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);

  datalist: IProduct[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._NgxSpinnerService.show("loader")
    this._ProductsService.getallproduct().subscribe({
      next: (res) => {
        console.log(res);
        this.datalist = res;
        this._NgxSpinnerService.hide("loader")
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
