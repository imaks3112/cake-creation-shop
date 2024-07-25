import { Component } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent {
  cakeList = [];

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
    try {
      await this.cakeListService.getAllBakeryCakeList().subscribe(ele => {
       this.cakeList = ele;
      });
      
    } catch (error) {
        alert(error)
    }
  }
}
