import { Category } from "../models/category";
import { Expence } from "../models/expence";

export enum Sort {
    unsorted,
    byId,
    byCategory,
    byCost,
    byDate,
    byName,
  }

export class ArraySorter {
  private sort: Sort = Sort.unsorted;
  
  sortCategoriesByName(categories: Category[]): Category[]{
    if (this.sort == Sort.byName){
      return categories.reverse();
    }
    this.sort = Sort.byName;
    return categories.sort((a,b) => a.name.localeCompare(b.name));   
  }

  sortExpenceByDate(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byDate){
      return expences.reverse();
    }
    this.sort = Sort.byDate;
    return expences.sort((a,b) => a.date - b.date );    
  }

  sortExpenceByCategory(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byCategory){
      return expences.reverse();
    }
    this.sort = Sort.byCategory;
    return expences.sort((a,b) => a.category.name.localeCompare(b.category.name));    
  }

  sortExpenceByCost(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byCost){
      return expences.reverse();
    }
    this.sort = Sort.byCost;
    return expences.sort((a,b) => a.cost - b.cost );    
  }
}