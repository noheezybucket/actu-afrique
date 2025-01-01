import { Component } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  template: `
    <section class="section-width pt-5 grid grid-cols-3">
      <div class="bg-gray-100 rounded p-2">
        <img src="assets/logo.svg" alt="logo"/>
        <p class="text-neutral-500 text-xs text-right">il y a 10 minutes</p>
        <h2 class="font-bold text-2xl">Title of the news</h2>
        <p>lorem20</p>
      </div>
    </section>
  `,
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {

}
