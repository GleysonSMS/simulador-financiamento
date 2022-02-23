import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})

export class DadosComponent implements OnInit {
  ngOnInit(): void {
  }
}
export class Dados{

  nome: String= '';
  profissao: String='';
  cpf: String='';
  email: String='';
  data: String='';
  cep: String='';
  telefone: String='';
  }
