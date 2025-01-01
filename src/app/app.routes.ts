import { Routes } from '@angular/router';
import {ArticlesComponent} from './features/articles/articles.component';

export const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    title:'À la une'
  }
];
