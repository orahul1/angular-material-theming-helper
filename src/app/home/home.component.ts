import {
  Component,
  OnInit
} from '@angular/core';
import {
  primaryColorsCollection,
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
  greyContrastCollection
} from '../colors';
import {
  FormControl,
  FormGroup
} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectionForm = new FormGroup({
    primary: new FormControl(),
    primaryContrast: new FormControl(),
    accent: new FormControl(),
    accentContrast1: new FormControl(),
    accentContrast2: new FormControl(),
    accentContrast3: new FormControl(),
  })

  customTheme: string;
  constructor() {}

  primaryColors = primaryColorsCollection;
  primaryContrast = redContrastCollection;
  accentColors = accentColorsCollection;
  contrasts = redContrastCollection;


  ngOnInit() {}

  generateTheme() {
    this.customTheme = "$theme-primary: mat-palette(" + this.selectionForm.controls['primary'].value + ',' + ' ' + this.selectionForm.controls['primaryContrast'].value + "); \n$light-accent: mat-palette(" + this.selectionForm.controls['accent'].value + ',' + ' ' + this.selectionForm.controls['accentContrast1'].value + ',' + ' ' + this.selectionForm.controls['accentContrast2'].value + ',' + ' ' + this.selectionForm.controls['accentContrast3'].value + ");"
  }

  accentColorChange() {
    let accentColor = this.selectionForm.controls['accent'].value;
    this.contrasts = this.changeContrast(accentColor);
  }

  primaryColorChange() {
    let primaryColor = this.selectionForm.controls['primary'].value;
    this.primaryContrast = this.changeContrast(primaryColor);
  }

  changeContrast(color) {
    switch (color) {
      case "$mat-red":
        return redContrastCollection;

      case "$mat-pink":
        return pinkContrastCollection;

      case "$mat-purple":
        return purpleContrastCollection;

      case "$mat-deep-purple":
        return deepPurpleContrastCollection;

      case "$mat-indigo":
        return indigoContrastCollection;

      case "$mat-blue":
        return blueContrastCollection;

      case "$mat-light-blue":
        return lightBlueContrastCollection;

      case "$mat-cyan":
        return cyanContrastCollection;

      case "$mat-teal":
        return tealContrastCollection;

      case "$mat-green":
        return greenContrastCollection;

      case "$mat-light-green":
        return lightGreenContrastCollection;

      case "$mat-lime":
        return limeContrastCollection;

      case "$mat-yellow":
        return yellowContrastCollection;

      case "$mat-amber":
        return amberContrastCollection;

      case "$mat-orange":
        return orangeContrastCollection;

      case "$mat-deep-orange":
        return deepOrangeContrastCollection;

      case "$mat-brown":
        return brownContrastCollection;

      case "$mat-grey":
        return greyContrastCollection;

      default:
        return redContrastCollection;
    }
  }

}
