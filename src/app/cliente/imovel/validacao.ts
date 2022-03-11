import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class validacao {
  static validaParcelas(input: AbstractControl) {
    const parcela = input.value;
    if (parcela <= 360) {
      return null;
    } else {
      return { parcelas: 'Preencha no maximo 360 parcelas' };
    }
  }

  static validarEntrada(input: AbstractControl) {
    const valor = input.parent?.get('valorImovel')?.value;
    const entrada = input.parent?.get('valorEntrada')?.value;

    if (entrada < valor * 0.2) {
      return { entrada: 'Preencha com no mínimo 20% do valor do imóvel' };
    } else {
      return null;
    }
  }
}
