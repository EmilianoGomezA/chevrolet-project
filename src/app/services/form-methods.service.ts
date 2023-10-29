import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMethodsService {

  constructor() { }

  onlyNumber(key: any) {
    if (key.charCode >= 48 && key.charCode <= 57) return true;
    else return false;
  }

  onlyLetter(key: any) {
    if (key.charCode >= 48 && key.charCode <= 57) return false;
    else return true;
  }

}
