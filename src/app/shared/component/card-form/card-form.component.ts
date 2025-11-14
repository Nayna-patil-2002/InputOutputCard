import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icard } from '../../model/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  natureForm!:FormGroup
  @Output() addpost= new EventEmitter<Icard>();
  constructor() { }

  ngOnInit(): void {
   this.createForm()
    this.onaddPost()
  }

  createForm() {
  this.natureForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
  });
  }

  onaddPost(){
    if(this.natureForm.valid){
      console.log(this.natureForm.value)
       this.addpost.emit(this.natureForm.value)
        
     this.natureForm.reset()
    }
  }

}
