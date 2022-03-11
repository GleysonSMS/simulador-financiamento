import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProponenteStorageService {
  proponente: any;

  constructor() {}

  getProponente() {
    return this.proponente;
  }
  setProponente(proponente: any) {
    this.proponente = proponente;
  }
}
