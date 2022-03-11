import { Component, OnInit } from '@angular/core';
import imovelStorageService, {
  ImovelStorageService,
  IImovel,
} from '../imovel/imovel-storage.service';

@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.css'],
})
export class AprovadoComponent implements OnInit {
  image: string = '/assets/images/aprovado.png';
  imovel: IImovel | undefined;
  parcelaInicial: any;
  valorTotalAprovado: any;
  valorImovel: any;
  valorEntrada: any;
  imovelStorage: ImovelStorageService = imovelStorageService;

  constructor() {}

  ngOnInit(): void {
    this.imovel = this.imovelStorage.getImovel();
    this.valorImovel = this.imovel?.imovel.valorimovel;
    this.valorEntrada = this.imovel?.imovel.valorEntrada;
    this.valorTotalAprovado = this.valorImovel - this.valorEntrada;
    this.parcelaInicial =
      (this.valorTotalAprovado *
        (100 + (0.1 * Number(this.imovel?.imovel.parcela)) / 12)) /
      100 /
      Number(this.imovel?.imovel.parcela);
  }
}
