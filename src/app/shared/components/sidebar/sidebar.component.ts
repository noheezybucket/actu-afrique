import {Component, Input} from '@angular/core';
import {Article} from '../../../features/articles/article';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <aside class="space-y-4 w-[300px] rounded">

      <label for="search">
        <p class="font-bold text-lg">Recherche</p>
        <input type="text" placeholder="Qu'avez vous en tête ?" class="input-form"/>
      </label>

      <fieldset>
        <legend class="font-bold text-lg">Pays</legend>

          <select class="input-form">
            <option>Senegal</option>
            <option>Mauritanie</option>
            <option>Mali</option>
          </select>

      </fieldset>

      <fieldset>
        <legend class="font-bold text-lg">Maison de presse</legend>
        <label for="search">
          <input type="checkbox" class="border py-3 px-1 rounded-lg"/>
          Seneweb
        </label>

      </fieldset>


    </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() articles:Article [] = []

}
