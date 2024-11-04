import { Routes } from '@angular/router';
import { CustomerLayoutComponent} from './customer-layout/customer-layout.component';
import {BookCatalogComponent} from './book-catalog/book-catalog.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ShoppingCartComponent}from './shopping-cart/shopping-cart.component';
export const customerRoutes: Routes = [
  {
    path: '',
    component:CustomerLayoutComponent,
    children:[
      {
        path: 'catalog',
        component:BookCatalogComponent,
      },
      {
        path:'catalog/:id',
        component:BookDetailComponent,
      },
{
  path:'cart',
  component:ShoppingCartComponent,
},
    ]
  }
];
