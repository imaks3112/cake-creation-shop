import { Component, OnInit } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
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

  dummyData;

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
       this.dummyData = await this.cakeListService.getAllBirthdayCakeList()
       console.log('dummyData ', this.dummyData)
  }
}
