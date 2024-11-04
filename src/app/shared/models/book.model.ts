import { Category } from "./category.model";
import { User } from "./user.model";
export interface Book{
    id:number;
    title:string;
    isbn:string;
    author: User;
    category:Category;
price:number;
publicationDate:Date;
sumary:string;
}