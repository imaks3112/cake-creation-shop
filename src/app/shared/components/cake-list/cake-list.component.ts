import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent {
  @Input() cakeList;

}
