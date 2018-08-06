import { Category } from "./category";

export interface Expence {
    id : number;
    date : number;
    category : Category;
    cost : number;
}