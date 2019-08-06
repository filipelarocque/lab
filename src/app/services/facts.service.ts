import { Injectable } from '@angular/core';

export interface Fact {
  indicador: string,
  referencia: string,
  fato: number,
  peso: number,
  vid: string,
  bsc: string,
  area: string,
  classificacao: string,
  empresa: string,
  unidade: string
}

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor() { }

  getFilteredFacts(parents: Map<string, string>): Fact[] {
    let filteredFacts = this.getFacts();
    parents.forEach( (dimensao, valor) => {
      filteredFacts.forEach( (fato, index) => fato[dimensao] != valor ? filteredFacts.splice(index, 1) : null )
    });
    return filteredFacts;
  }

  getFacts(): Fact[] {
    return [
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "01/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "01/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "02/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "02/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "03/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "03/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "04/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "04/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "05/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "05/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "06/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "06/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "07/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VC",
        unidade: ""
      },
      {
        indicador: "Acessos SAP - Solicitações resolvidas no prazo",
        referencia: "07/2019",
        fato: 1,
        peso: 1,
        vid: "CURITIBA",
        bsc: "CLIENTE",
        area: "Central de acesso",
        classificacao: "KPI COE",
        empresa: "VE",
        unidade: ""
      }
    ];
  }

}