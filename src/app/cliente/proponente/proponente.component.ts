import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css']
})
export class ProponenteComponent implements OnInit {

  proponente!: FormGroup;
  submittingForm: boolean = false;


  constructor(
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.buildProponente();
  }

  private buildProponente(){
    this.proponente = this.FormBuilder.group({
      nome:['', [Validators.required, Validators.minLength(3)]],
      profissao:['', [Validators.required, Validators.minLength(2)]],
      cpf:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required]],
      data:['', [Validators.required, Validators.minLength(2)]],
      cep:['', [Validators.required, Validators.minLength(8)]],
      telefone:['', [Validators.required, Validators.minLength(11)]]
    })
  }
  submitForm(){
    this.submittingForm = true;
  }
}
