import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent implements OnInit {
  ngOnInit(): void {}
}

export class Dados {
  public nome: string = '';
  public profissao: string = '';
  public CPF: string = '';
  public email: string = '';
  public data: string = '';
  public cep: string = '';
  public celular: string = '';
  public tipoImovel: string = '';
  public renda: string = '';
  public valorimovel: string = '';
  public valorEntrada: string = '';
  public parcelas: string = '';
}
