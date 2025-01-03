import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <header>
      <section class="section-width space-y-5 mt-5">
        <section class="flex justify-between items-center">
          <div class="flex gap-2">
            <img src="/assets/logo.svg" alt="Actu Afrique" class="w-[50px] h-[50px] border rounded-full border-orange-500" />
            <div class="flex-col">
              <span class="font-bold">Actu</span> <br/>
              <span>Afrique</span>
            </div>
          </div>
          <nav>
            <ul class="flex gap-5">
              <li>
                <a routerLink="/" routerLinkActive="active-link">Actualités</a>
              </li>
              <li>
                <a routerLink="/tendencies" routerLinkActive="active-link">Tendances</a>

              </li>
              <li>
                <a routerLink="/votes" routerLinkActive="active-link">Sondages</a>

              </li>
            </ul>
          </nav>
          <div class="flex gap-2">
            <button class="btn-primary flex items-center justify-center gap-2">App iOS <img src="/assets/ios.svg" class="w-5"/></button>
            <button class="btn-primary flex items-center justify-center gap-2">App Android <img src="/assets/android.svg" class="w-5"/></button>

          </div>
        </section>
      </section>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
