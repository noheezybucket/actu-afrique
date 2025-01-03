import {Component, Input} from '@angular/core';
import {Article} from '../../article';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-article-card',
  imports: [
    NgStyle
  ],
  template: `
      <div class="bg-gray-100 rounded-lg overflow-hidden relative">

        <img [src]="article.image" alt="logo" class=" w-full object-cover"/>

        <div class="p-2 space-y-2">

          <div class="text-neutral-500 text-xs">{{article.timeAgo}}</div>

          <div class="flex justify-between pl-1" [ngStyle]="{
          'border-left': '3px solid ' + article.siteFeed.color,
          'color': article.siteFeed.color,
          }">
            <h3>{{article.siteFeed.nameWithoutRank}}</h3>
            <h3 class="text-orange-500">{{article.siteFeed.nameWithRank}}</h3>
          </div>

          <h2 class="font-bold text-lg">{{ article.title }}</h2>

          <div class="flex items-center gap-3 absolute top-0 left-2 text-xs">
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
        </div>

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
