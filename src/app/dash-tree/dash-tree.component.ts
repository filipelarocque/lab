import { Component, OnInit } from '@angular/core';

import { TreeviewItem } from 'ngx-treeview';

//  Services
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'app-dash-tree',
  templateUrl: './dash-tree.component.html',
  styleUrls: ['./dash-tree.component.sass']
})
export class DashTreeComponent implements OnInit {

  items: TreeviewItem[];

  config: {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
 };


  constructor(private factsService: FactsService) { }

  ngOnInit() { }

  getItems(treeviewItems: TreeviewItem[]): TreeviewItem[] {
    let parents = new Map<string, string>();
    treeviewItems.forEach( (treeviewItem) => parents.set(treeviewItem.value , treeviewItem.text));      
    this.factsService.getFilteredFacts(parents);
    
  }

}
