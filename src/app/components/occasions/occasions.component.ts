import { Component } from '@angular/core';

@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.scss']
})
export class OccasionsComponent {
  cakeList = [
    {
      id: 1,
      name: 'Birthday cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_13.jpg'
    },
    {
      id: 2,
      name: 'Birthday cake',
      price: 4500,
      imageurl: '../../../assets/img/cake_creation_7.jpg'
    },
    {
      id: 3,
      name: 'Birthday cake',
      price: 350,
      imageurl: '../../../assets/img/cake_creation_10.jpg'
    },
    {
      id: 4,
      name: 'Birthday cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_11.jpg'
    },
    {
      id: 5,
      name: 'Birthday cake',
      price: 2500,
      imageurl: '../../../assets/img/cake_creation_6.jpg'
    },
    {
      id: 3,
      name: 'Birthday cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_10.jpg'
    },
    {
      id: 4,
      name: 'Birthday cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_11.jpg'
    },
    {
      id: 5,
      name: 'Birthday cake',
      price: 500,
      imageurl: '../../../assets/img/cake_creation_6.jpg'
    }
  ]
}
