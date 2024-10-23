import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroments'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _HttpClient = inject(HttpClient);

  getallproduct(): Observable<any> {
    return this._HttpClient.get(`${enviroment.baseUrl}/Products`);
  }
}
