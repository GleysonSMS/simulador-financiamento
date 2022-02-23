import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { take } from 'rxjs/operators';
import { Dados } from './dados.component';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {


  private readonly API = 'http://localhost:3000/proponente';

  constructor(private http: HttpClient) { }

  add(dados: Dados)
  {
    return this.http.post(this.API, dados).pipe(take(1));
  }
}
