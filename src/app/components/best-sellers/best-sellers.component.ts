import { Component } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent {
  cakeList = [];

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
    try {
      await this.cakeListService.getAllBestSellersCakeList().subscribe(ele => {
       this.cakeList = ele;
      });
      
    } catch (error) {
        alert(error)
    }
  }
}
