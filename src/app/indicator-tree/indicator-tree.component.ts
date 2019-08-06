import { Component, OnInit } from '@angular/core';

import { Fact } from '../models/Fact';
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'app-indicator-tree',
  templateUrl: './indicator-tree.component.html',
  styleUrls: ['./indicator-tree.component.sass']
})
export class IndicatorTreeComponent implements OnInit {

  constructor(public factsService: FactsService) { }

  ngOnInit() {
  }

  expand(node: ) {

  }

  getChildren(filteredFacts: Fact[], dimensao: string): string[] {
    let children = new Set<string>();
    filteredFacts.forEach( fato => children.add(fato[dimensao]) );
    return Array.from(children).sort();
  }

  filterIndicator(dimensoesSelecionadas: string[], indicador?: string) {

  }

  selectLeaf(parents: Map<string, string>) {
    let filteredFacts = this.factsService.getFilteredFacts(parents);

  }

}
