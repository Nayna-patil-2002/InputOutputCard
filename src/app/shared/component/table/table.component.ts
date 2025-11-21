import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../model/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() studentArr:Array<Istudent>=[]
  @Output() stdObj:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  @Output() editObj:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  constructor() { }

  ngOnInit(): void {
  }

   onEdit(std:Istudent){
    console.log(std)
    this.editObj.emit(std)
   }


   remove(std:Istudent){
     console.log(std)
     this.stdObj.emit(std)
   }
  
}
