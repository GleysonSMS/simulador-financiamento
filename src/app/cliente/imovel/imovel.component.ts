import { DadosService } from './../dados/dados.service';
import { ImovelService } from './imovel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProponenteStorageService } from '../proponente/proponente-storage.service';
import imovelStorageService, {
  ImovelStorageService,
} from './imovel-storage.service';
import { validacao } from './validacao';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  imovel!: FormGroup;
  submittingForm: boolean = false;
  proponente: any;
  dados: any;
  private imovelStorage: ImovelStorageService = imovelStorageService;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private proponenteStorage: ProponenteStorageService,
    private imovelService: ImovelService,
    private dadosService: DadosService
  ) {}

  ngOnInit(): void {
    this.buildImovel();
    this.proponente = this.proponenteStorage.getProponente();
  }

  private buildImovel() {
    this.imovel = this.FormBuilder.group({
      tipoImovel: ['', Validators.compose([Validators.required])],
      renda: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9.]*'),
        ]),
      ],
      valorImovel: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9.]*'),
        ]),
      ],
      valorEntrada: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9.]*'),
          validacao.validarEntrada,
        ]),
      ],
      parcela: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*'),
          validacao.validaParcelas,
        ]),
      ],
    });
  }

  submitForm() {
    let valorTotalAprovado =
      Number(this.valorImovel?.value) - Number(this.valorEntrada?.value);
    let parcelaInicial =
      (valorTotalAprovado * (100 + (0.1 * Number(this.parcela?.value)) / 12)) /
      100 /
      Number(this.parcela?.value);
    if (this.imovel.valid) {
      const proposta = {
        proponente: this.proponente,
        imovel: {
          tipoImovel: this.tipoImovel?.value,
          renda: this.renda?.value,
          valorimovel: this.valorImovel?.value,
          valorEntrada: this.valorEntrada?.value,
          parcela: this.parcela?.value,
          valorTotalAprovado,
          parcelaInicial,
        },
      };

      this.imovelService.saveProposta(proposta).subscribe({
        next: (response: any) => {
          console.log('Acesso ao backend: ', response);
          if (
            Number(parcelaInicial + this.renda?.value) <=
            Number(this.renda?.value * 0.3)
          ) {
            this.imovelStorage.setImovel(proposta);
            this.router.navigate(['/aprovado']);
          } else {
            this.router.navigate(['/reprovado']);
          }
        },
        error: (error: any) => {
          console.error('Erro ao salvar no backend: ', error);
        },
      });
    }
  }
  get tipoImovel() {
    return this.imovel.get('tipoImovel');
  }
  get renda() {
    return this.imovel.get('renda');
  }
  get valorImovel() {
    return this.imovel.get('valorImovel');
  }
  get valorEntrada() {
    return this.imovel.get('valorEntrada');
  }
  get parcela() {
    return this.imovel.get('parcela');
  }
}
