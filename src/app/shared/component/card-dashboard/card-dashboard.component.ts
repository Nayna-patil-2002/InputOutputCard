import { Component, OnInit } from '@angular/core';
import { Icard } from '../../model/card';
import { cards } from '../../const/card';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {
   NatureArray:Array<Icard>=cards;
   
  constructor() { }

  ngOnInit(): void {
  }

  onAddCard(card:Icard){
    this.NatureArray.push(card)
  }

  onRemoveCard(index:number){
    let getConfirm=confirm("are you sure you want to remove this post?")
    if(getConfirm){
       this.NatureArray.splice(index, 1)
    }
  }

}
