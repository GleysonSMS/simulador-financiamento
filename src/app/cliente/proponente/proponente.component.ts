import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css']
})
export class ProponenteComponent implements OnInit {

  proponente!: FormGroup;
  submittingForm: boolean = false;
  ///currentAction: String;


  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  ///  this.setCurrentAction();
    this.buildProponente();
  }

  private buildProponente(){
    this.proponente = this.FormBuilder.group({
      nome:['',Validators.compose ([Validators.required, Validators.minLength(10), Validators.pattern('[a-zA-Z ]*')])],
      profissao:['',Validators.compose ([Validators.required,Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')])],
      cpf:['',Validators.compose ([Validators.required,Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[1-9 ]*')])],
      email:['',Validators.compose ([Validators.required, Validators.email])],
      data:['',Validators.compose ([Validators.required, Validators.minLength(2)])],
      cep:['',Validators.compose ([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[1-9 ]*')])],
      telefone:['',Validators.compose ([Validators.required, Validators.minLength(11),Validators.maxLength(11), Validators.pattern('[1-9 ]*')])]
    })
  }
  submitForm(){
    this.submittingForm = true;
  }

/*  private setCurrentAction(){
    if (this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
   else
      this.currentAction = "edit"
  }*/
}
