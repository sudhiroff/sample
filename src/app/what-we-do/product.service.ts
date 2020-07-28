import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getCategory():Observable<any> {
   return this.http.get(environment.getProduct);
  }

  public getProduct():Observable<any> {
    return this.http.get(environment.getProduct);
   }
}
