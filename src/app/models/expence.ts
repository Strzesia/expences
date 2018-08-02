import { Category } from "./category";

export interface Expence {
    id : number;
    date : Date;
    category : Category;
    cost : number;
}