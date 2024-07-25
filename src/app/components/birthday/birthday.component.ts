import { Component, OnInit } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
  cakeList = [];

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
    try {
      await this.cakeListService.getAllBirthdayCakeList().subscribe(ele => {
       this.cakeList = ele;
      });
      
    } catch (error) {
        alert(error)
    }
  }
}
