import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProponenteStorageService {
  proponente: any;

  constructor() { }

  getProponente(){
    return this.proponente;
  }
  setPropoente(proponente:any){
    this.proponente = proponente;
  }
}
