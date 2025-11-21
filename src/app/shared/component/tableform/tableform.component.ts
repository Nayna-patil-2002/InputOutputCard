import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Istudent } from '../../model/table';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.scss']
})
export class TableformComponent implements OnInit , OnChanges{
  isinEditMode:boolean=false;
  stdForm!:FormGroup
  @Output() emitstdAdd:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  @Input() editobj!:Istudent;
  @Output() stdupdateObj:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  constructor(
    private _snackabr:SnackbarService
  ) { }
  

  ngOnInit(): void {
    this.createStdForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
   console.log(changes['editobj'].currentValue)
   if(changes['editobj'].currentValue){
    this.isinEditMode=true;
    this.stdForm.patchValue(changes['editobj'].currentValue)
   }
  }
  

  createStdForm(){
    this.stdForm=new FormGroup({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required])
    })
}
 onstdAdd(){
  if(this.stdForm.valid){
    console.log(this.stdForm.value);
    const stdObj=this.stdForm.value
    this.emitstdAdd.emit(stdObj)
    this.stdForm.reset()
  }
 }

 onUpdate(){
 if(this.stdForm.valid){
  const updateObj={...this.stdForm.value, id:this.editobj.id};
  console.log(updateObj)
  this.stdupdateObj.emit(updateObj)
 
  this.stdForm.reset()
  this.isinEditMode=false;
 }
 }
}
