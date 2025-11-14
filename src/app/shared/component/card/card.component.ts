import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icard } from '../../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() naturesCard!:Icard;
  @Input() index!:number
  @Output() remove=new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(){
   this.remove.emit(this.index)
  }


  
}