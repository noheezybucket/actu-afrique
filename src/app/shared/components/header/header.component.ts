import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  template: `
    <header>
      <section class="section-width space-y-5 mt-5">
        <section class="flex justify-between items-center">
          <div class="flex">
            <img src="/assets/logo.svg" alt="Actu Afrique" class="w-[50px]" />
            <div class="flex-col">
              <span class="font-bold">Actu</span> <br/>
              <span>Afrique</span>
            </div>
          </div>
          <button class="btn-primary">Télécharger l'app mobile</button>
        </section>

        <section class="flex justify-between items-center bg-gray-100 p-2 rounded">
          <nav>
            <ul class="flex gap-10 font-semibold uppercase">
              <li>
                <a routerLink="/">À la une</a>
               </li>
              <li>Politique</li>
              <li>Sport</li>
              <li>People</li>
            </ul>
          </nav>

          <div>
            <form>
              <select class="border p-2 rounded bg-primary text-white">
                <option>Sénégal</option>
                <option>Guinée</option>
              </select>
            </form>
          </div>
        </section>

      </section>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
