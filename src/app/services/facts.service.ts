import { Injectable } from '@angular/core';

import { Fact } from '../models/Fact';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor() { }

  getFacts() {
    return [
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","01/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","01/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","02/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","02/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","03/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","03/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","04/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","04/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","05/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","05/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","06/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","06/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","07/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VC",""),
      new Fact("Acessos SAP - Solicitações resolvidas no prazo","07/2019",1,1,"CURITIBA","CLIENTE","Central de acesso","KPI COE","VE","")
    ];
  }

  getFilteredFacts(parents: Map<string, string>): Fact[] {
    let filteredFacts = this.getFacts();
    parents.forEach( (dimensao, valor) => {
      filteredFacts.forEach( (fato, index) => fato[dimensao] != valor ? filteredFacts.splice(index, 1) : null )
    });
    return filteredFacts;
  }

}
