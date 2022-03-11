import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImovelService {
  private url = environment.baseUrl + 'http://localhost:3000/proposta';

  constructor(private http: HttpClient) {}

  saveProposta(proposta: any): Observable<any> {
    return this.http.post(this.url, proposta);
  }
}
