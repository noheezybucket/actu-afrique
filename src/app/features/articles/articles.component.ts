import {Component, inject} from '@angular/core';
import {ArticleCardComponent} from './components/article-card/article-card.component';
import {Article} from './article';
import {ArticlesService} from './services/articles.service';
import {NgClass, NgForOf} from '@angular/common';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-articles',
  imports: [
    ArticleCardComponent,
    NgForOf,
    SidebarComponent,
    NgClass
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  articlesList: Article[] = []
  articleService:ArticlesService = inject(ArticlesService)
  country = "senegal"

  constructor() {
    this.articleService.getAllArticles(this.country).then((articles:Article[]) => {
      this.articlesList = articles;
    })
  }

}
