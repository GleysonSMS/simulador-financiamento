import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProponenteStorageService } from './proponente-storage.service';
import { validacao } from './validacao';

@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css'],
})
export class ProponenteComponent implements OnInit {
  proponenteForm!: FormGroup;
  submittingForm: boolean = false;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private proponenteStorage: ProponenteStorageService
  ) {}

  ngOnInit(): void {
    this.buildProponente();
  }

  private buildProponente() {
    this.proponenteForm = this.FormBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      profissao: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.pattern('[0-9-.]*'),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      data: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          validacao.validarData,
        ]),
      ],
      cep: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern('[0-9-]*'),
        ]),
      ],
      telefone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.pattern('[0-9()-]*'),
        ]),
      ],
    });
  }

  submitForm() {
    if (this.proponenteForm.valid) {
      const proponenteObj = {
        nome: this.nome?.value,
        profissao: this.profissao?.value,
        cpf: this.cpf?.value,
        email: this.email?.value,
        data: this.data?.value,
        cep: this.cep?.value,
        telefone: this.telefone?.value,
      };
      this.proponenteStorage.setProponente(proponenteObj);
      this.submittingForm = true;
      this.router.navigate(['/imovel']);
    }
  }

  get nome() {
    return this.proponenteForm.get('nome');
  }
  get profissao() {
    return this.proponenteForm.get('profissao');
  }
  get cpf() {
    return this.proponenteForm.get('cpf');
  }
  get email() {
    return this.proponenteForm.get('email');
  }
  get data() {
    return this.proponenteForm.get('data');
  }
  get cep() {
    return this.proponenteForm.get('cep');
  }
  get telefone() {
    return this.proponenteForm.get('telefone');
  }
}
