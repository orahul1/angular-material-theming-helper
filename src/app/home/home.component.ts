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
    warn: new FormControl(),
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


  ngOnInit() {
    this.setInitialColors();
    this.generateTheme();
  }


  setInitialColors(){
    this.selectionForm.controls['warn'].setValue('$mat-red');
    this.selectionForm.controls['primary'].setValue('$mat-deep-orange');
    this.selectionForm.controls['primaryContrast'].setValue('800');
    this.selectionForm.controls['accent'].setValue('$mat-grey');
    this.selectionForm.controls['accentContrast1'].setValue('A200');
    this.selectionForm.controls['accentContrast2'].setValue('A100');
    this.selectionForm.controls['accentContrast3'].setValue('A400');
  }

  generateTheme() {
    this.customTheme = "$app-warn: mat-palette("+this.selectionForm.controls['warn'].value+"); \n"+
                       "$custom-primary: mat-palette(" + this.selectionForm.controls['primary'].value + ',' + ' ' + this.selectionForm.controls['primaryContrast'].value + "); \n" + 
                       "$custom-accent: mat-palette(" + this.selectionForm.controls['accent'].value + ',' + ' ' + this.selectionForm.controls['accentContrast1'].value + ',' + ' ' + this.selectionForm.controls['accentContrast2'].value + ',' + ' ' + this.selectionForm.controls['accentContrast3'].value + "); \n" +
                       "$custom-theme: mat-light-theme($custom-primary, $custom-accent, $app-warn); \n" +
                       "@include angular-material-theme($custom-theme);"
  }

  accentColorChange() {
    let accentColor = this.selectionForm.controls['accent'].value;
    this.contrasts = this.changeContrast(accentColor);
    this.generateTheme();
  }

  primaryColorChange() {
    let primaryColor = this.selectionForm.controls['primary'].value;
    this.primaryContrast = this.changeContrast(primaryColor);
    this.generateTheme();
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