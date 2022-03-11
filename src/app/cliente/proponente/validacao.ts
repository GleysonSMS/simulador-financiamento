import { AbstractControl, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class validacao {
  static validarData(input: AbstractControl) {
    let data = input.value;
    const dataSplit = data.split('/');
    const day = dataSplit[0];
    const month = dataSplit[1];
    const year = dataSplit[2];
    data = new Date(year, month - 1, day);
    const now = new Date();
    const past = new Date(data);
    const diff = Math.abs(now.getTime() - past.getTime());
    const anos = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));

    if (now <= past) {
      return { idade: 'Preencha com sua data de Nascimento válida' };
    } else if (anos >= 18) {
      return null;
    } else {
      return { idade: 'Preencha com sua data de Nascimento válida' };
    }
  }
}
