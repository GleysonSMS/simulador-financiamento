import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { validacao } from './validacao';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  imovel!: FormGroup;
  submittingForm: boolean = false;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildImovel();
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
    if (this.imovel.valid){
        this.submittingForm = true;
        this.router.navigate(['/']);
      }
  }

}
