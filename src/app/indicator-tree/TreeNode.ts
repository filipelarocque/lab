import { FactsService } from '../services/facts.service';

export class TreeNode {
    dimension: string;
    value: string;
    children: string[];
    isLeaf: boolean;

    constructor(factsService: FactsService) { }

    expand() {
        if(this.children)
    }

    hasChild():boolean {
        
    }
}