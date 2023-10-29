import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormMethodsService } from 'src/app/services/form-methods.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {

  @Input() ngModelProperty: any = null;
  @Input() inputType: string = '';
  @Input() inputName: string = '';
  @Input() maxChar: string = '';
  @Input() numberValidation: boolean = false;
  @Input() letterValidation: boolean = false;
  @Input() array: any = [];

  @Output() ngModelPropertyChange = new EventEmitter<any>();
  @Output() selectedFileChange = new EventEmitter<File | null>();

  constructor(private formMethods: FormMethodsService) { }

  selectedFile: File | null = null;

  validateNumber(key: any) {
    return this.formMethods.onlyNumber(key);
  }

  validateLetter(key: any) {
    return this.formMethods.onlyLetter(key);
  }

  validateChar(event: any) {
    if (this.numberValidation) {
      return this.validateNumber(event);
    } else if (this.letterValidation) {
      return this.validateLetter(event);
    }
    return true;
  }

  onInputChange(value: any) {
    this.ngModelPropertyChange.emit(value);
  }

  onFileChange(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = null;
    }

    this.selectedFileChange.emit(this.selectedFile);
  }
}
