import {Component, Input} from '@angular/core';
import {Article} from '../../article';

@Component({
  selector: 'app-article-card',
  imports: [],
  template: `
      <div class="bg-gray-100 rounded-lg overflow-hidden">

        <img [src]="article.image" alt="logo" class="h-[300px] w-full object-fit"/>
        <div class="p-2 space-y-1">
          <h2 class="font-bold text-lg">{{ article.title }}</h2>
          <div class="flex justify-between w-full">
            <div class="text-neutral-500 text-xs">{{article.timeAgo}}</div>
          </div>
          <div class="flex justify-between">
            <h3>{{article.siteFeed.nameWithoutRank}}</h3>
            <h3>{{article.siteFeed.nameWithRank}}</h3>
          </div>

          <div class="flex gap-5">

            <div class="text-green-500 flex">
              <img src="/assets/arrow-up.svg" alt="arrow up" class="inline">
                {{article.siteFeed.percentageUp}} %

            </div>

            <div class="text-red-500 flex ">
              <img src="/assets/arrow-down.svg" alt="arrow down" class="inline">
                {{article.siteFeed.percentageDown}} %

            </div>
          </div>

          <div class="mt-1">
            <a routerLink="/" class="btn-primary">Voir plus</a>
          </div>

        </div>

      </div>
  `,
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() article !: Article;

}
