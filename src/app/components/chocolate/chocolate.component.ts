import { Component } from '@angular/core';
import { CakeListService } from 'src/app/services/cake-list.service';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.scss']
})
export class ChocolateComponent {
  cakeList = [];

  constructor(private cakeListService: CakeListService) {}

  async ngOnInit(): Promise<any> {
    try {
      await this.cakeListService.getAllChocolatesCakeList().subscribe(ele => {
       this.cakeList = ele;
      });
      
    } catch (error) {
        alert(error)
    }
  }
}
