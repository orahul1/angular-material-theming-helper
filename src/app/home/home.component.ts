import { Component, OnInit } from '@angular/core';
import { primaryColorsCollection, 
         accentColorsCollection, 
         redContrastCollection, 
         pinkContrastCollection, 
         purpleContrastCollection, 
         deepPurpleContrastCollection, 
         indigoContrastCollection,
         blueContrastCollection,
         lightBlueContrastCollection,
         cyanContrastCollection,
         tealContrastCollection,
         greenContrastCollection,
         lightGreenContrastCollection,
         limeContrastCollection,
         yellowContrastCollection,
         amberContrastCollection,
         orangeContrastCollection,
         deepOrangeContrastCollection,
         brownContrastCollection,
         greyContrastCollection } from '../colors';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  selectionForm = new FormGroup({
    primary : new FormControl(),
    accent : new FormControl(),
    accentContrast1 : new FormControl(),
    accentContrast2 : new FormControl(),
    accentContrast3 : new FormControl(),

  })

  constructor() { }
  
  primaryColors = primaryColorsCollection;
  accentColors = accentColorsCollection;
  contrasts = redContrastCollection;
  
  ngOnInit() {
  }

  primaryColorChange(){
/*     console.log(this.selectionForm.controls['primary'].value); */
    console.log(this.selectionForm.controls['accent'].value);
    let accentColor = this.selectionForm.controls['accent'].value;
    this.changeContrast(accentColor);
  }

  changeContrast(color){
    switch(color) {
      case "$mat-red":
          this.contrasts = redContrastCollection;
          break;
      case "$mat-pink":
          this.contrasts = pinkContrastCollection;
          break;

      case "$mat-purple":
          this.contrasts = purpleContrastCollection;
          break;

      case "$mat-deep-purple":
          this.contrasts = deepPurpleContrastCollection;
          break;

      case "$mat-indigo":
          this.contrasts = indigoContrastCollection;
          break;

      case "$mat-blue":
          this.contrasts = blueContrastCollection;
          break;

      case "$mat-light-blue":
          this.contrasts = lightBlueContrastCollection;
          break;

      case "$mat-cyan":
          this.contrasts = cyanContrastCollection;
          break;

      case "$mat-teal":
          this.contrasts = tealContrastCollection;
          break;

      case "$mat-green":
          this.contrasts = greenContrastCollection;
          break;

      case "$mat-light-green":
          this.contrasts = lightGreenContrastCollection;
          break;

      case "$mat-lime":
          this.contrasts = limeContrastCollection;
          break;

      case "$mat-yellow":
          this.contrasts = yellowContrastCollection;
          break;

      case "$mat-amber":
          this.contrasts = amberContrastCollection;
          break;

      case "$mat-orange":
          this.contrasts = orangeContrastCollection;
          break;

      case "$mat-deep-orange":
          this.contrasts = deepOrangeContrastCollection;
          break;

      case "$mat-brown":
          this.contrasts = brownContrastCollection;
          break;

      case "$mat-grey":
          this.contrasts = greyContrastCollection;
          break;

      default:
        this.contrasts = redContrastCollection;
    }
  }

}
