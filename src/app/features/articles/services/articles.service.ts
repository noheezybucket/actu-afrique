import { Injectable } from '@angular/core';
import {Article} from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // url = "http://85.215.131.40:8087/api/item/country/"
  private url = 'http://localhost:3000/articles';
  constructor() { }

  async getAllArticles(coutry:string) : Promise<Article[]> {
    const response = await fetch(`${this.url}`)

    const data = await response.json();

    console.log(data)

    return await data ?? [];
  }
}
