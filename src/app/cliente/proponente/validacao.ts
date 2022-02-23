import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class validacao {
  static validarData(data: AbstractControl) {
    let dataAtual = new Date();
    let datanascimento = new Date(data.value);
    let anos = dataAtual.getFullYear() - datanascimento.getFullYear();

    if (dataAtual.getMonth() != datanascimento.getMonth()) {
      if (dataAtual.getMonth() < datanascimento.getMonth()) {
        anos--;
        if(anos >= 18){
           return null
        }
        else{
          return {idade:'tem que ter 18 anos ou mais'}
        }
      }
    } else {
      if (dataAtual.getDate() < datanascimento.getDate()) {
        anos--;
        if(anos >= 18){
          return null
       }
       else{
         return {idade:'tem que ter 18 anos ou mais'}
       }
        
      }
    }
    return anos;
  }
}
