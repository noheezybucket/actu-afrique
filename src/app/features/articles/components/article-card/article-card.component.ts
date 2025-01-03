import {Component, Input} from '@angular/core';
import {Article} from '../../article';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [
    NgStyle,
    RouterLink
  ],
  template: `
      <div class="bg-gray-100 rounded-lg overflow-hidden relative">
        <div class="p-2 space-y-4">

          <div class="flex justify-between pl-1" [ngStyle]="{
          'border-left': '3px solid ' + article.siteFeed.color,
          'color': article.siteFeed.color,
          }">
            <h3>{{article.siteFeed.nameWithoutRank}}</h3>
            <h3 class="text-orange-500">{{article.siteFeed.nameWithRank}}</h3>
          </div>

          <div class="flex flex-row-reverse justify-between">
            <div class="flex items-center gap-3  text-xs">
              <div class="bg-green-500 text-white rounded flex justify-center items-center p-[2px]">
                <img src="/assets/arrow-up.svg" alt="arrow up" class="w-5 text-white">
                {{article.siteFeed.percentageUp}} %
              </div>

              <p class="text-neutral-300">|</p>

              <div class="bg-red-500 text-white rounded flex justify-center items-center p-[2px] ">
                <img src="/assets/arrow-down.svg" alt="arrow down" class="w-5">
                {{article.siteFeed.percentageDown}} %
              </div>
            </div>
            <div class="text-neutral-500 text-xs">{{article.timeAgo}}</div>
          </div>

          <div class="space-y-2">
            <h2 class="font-bold text-lg">{{ article.title }}</h2>
            <a routerLink="/" class="text-orange-500">Lire l'article...</a>
          </div>
        </div>
        <img [src]="article.image" alt="logo" class=" w-full object-cover"/>
      </div>
  `,
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() article !: Article;

  constructor() {
    console.log(this.article);
  }
}
