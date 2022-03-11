export interface IImovel {
  proponente: {
    nome: string;
    profissao: string;
    cpf: number;
    email: string;
    data: string;
    cep: number;
    celular: number;
  };
  imovel: {
    tipoImovel: string;
    renda: number;
    valorimovel: number;
    valorEntrada: number;
    parcela: number;
  };
}

export class ImovelStorageService {
  imovel: IImovel | undefined;

  constructor() {}

  getImovel() {
    return this.imovel;
  }
  setImovel(imovel: IImovel) {
    this.imovel = imovel;
  }
}

export default new ImovelStorageService();
