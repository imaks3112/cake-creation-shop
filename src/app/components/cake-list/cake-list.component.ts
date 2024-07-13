import { Component } from '@angular/core';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent {

  cakeList = [
    {
      id: 1,
      name: 'Choclate cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_13.jpg'
    },
    {
      id: 2,
      name: 'Choclate cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_3.jpg'
    },
    {
      id: 3,
      name: 'Choclate cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_4.jpg'
    },
    {
      id: 4,
      name: 'Choclate cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_5.jpg'
    },
    {
      id: 5,
      name: 'Choclate cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_6.jpg'
    },
  ]

}
