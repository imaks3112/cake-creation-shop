import { Component } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.scss']
})
export class OccasionsComponent {
  cakeList = [];

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
    try {
      await this.cakeListService.getAllOccasionCakeList().subscribe(ele => {
       this.cakeList = ele;
      });
      
    } catch (error) {
        alert(error)
    }
  }
}
