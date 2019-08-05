import { Component, OnInit } from '@angular/core';

import { Fact } from '../models/Fact';
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'app-indicator-tree',
  templateUrl: './indicator-tree.component.html',
  styleUrls: ['./indicator-tree.component.sass'],
  providers: [FactsService]
})
export class IndicatorTreeComponent implements OnInit {

  constructor(public factsService: FactsService) { }

  ngOnInit() {
  }

  getNextNodes(filteredFacts: Fact[], dimensao: string): string[] {
    let nextNodes = new Set<string>();
    filteredFacts.forEach( fato => nextNodes.add(fato[dimensao]) );
    return Array.from(nextNodes).sort();
  }

  filterIndicator(dimensoesSelecionadas: string[], indicador?: string) {

  }

  selectLeaf(parents: Map<string, string>) {
    let filteredFacts = this.factsService.getFilteredFacts(parents);

  }

}
