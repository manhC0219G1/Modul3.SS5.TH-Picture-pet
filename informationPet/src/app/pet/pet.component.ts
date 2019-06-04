import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'puppie';
  petImage = 'https://i.pinimg.com/236x/3c/99/8c/3c998c18434d3b98ac0e69fcfc848199.jpg?nii=t';

  constructor() { }
  updateName(name){
    this.petName = name;
  }
  updateImage(image){
    this.petImage = image;
  }




  ngOnInit() {
  }

}
