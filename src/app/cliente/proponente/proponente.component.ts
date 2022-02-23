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
    private route: ActivatedRoute
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
        Validators.compose([Validators.required, Validators.minLength(10)]),
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
      this.submittingForm = true;
      this.router.navigate(['/imovel']);
    }
  }

  get nome() {
    return this.proponenteForm.get('nome');
  }
}
