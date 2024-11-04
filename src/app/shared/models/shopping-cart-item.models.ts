import { Book } from "./book.model";

export interface ShoppingCartItem{
    book:Book;
    quantity:number;
}