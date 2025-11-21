import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../model/table';
import { tableData } from '../../const/table';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-tabledashboard',
  templateUrl: './tabledashboard.component.html',
  styleUrls: ['./tabledashboard.component.scss']
})
export class TabledashboardComponent implements OnInit {
   stdArr:Array<Istudent>=tableData
    editObj!:Istudent
 
  constructor(
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onstdadd(std:Istudent){
    this.stdArr.push(std)
    this._snackbar.openSnackbar(`This ${std.name} added succesfully.`)
  }

  onEdit(std:Istudent){
   this.editObj=std
   console.log(this.editObj)

  }

  onupdate(std:Istudent){
    let getIndex=this.stdArr.findIndex(s=>s.id===std.id)
    this.stdArr[getIndex]=std
     this._snackbar.openSnackbar(`This ${std.name} updated succesfully.`)
  }

  onremoveStd(std:Istudent){
   let getIndex=this.stdArr.findIndex(s=>s.id===std.id)
   this.stdArr.splice(getIndex, 1)
   this._snackbar.openSnackbar(`This ${std.name} removed succesfully.`)
  }

}
