import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormMethodsService } from 'src/app/services/form-methods.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit{

  @Input() ngModelProperty: any = null;
  @Input() inputLabel: string = '';
  @Input() inputType: string = '';
  @Input() inputName: string = '';
  @Input() minChar: string = '';
  @Input() maxChar: string = '';
  @Input() numberValidation: boolean = false;
  @Input() letterValidation: boolean = false;
  @Input() array: any = [];

  @Output() ngModelPropertyChange = new EventEmitter<any>();
  @Output() selectedFileChange = new EventEmitter<File | null>();

  selectedFile: File | null = null; 
  fechaMinima: any = null;

  constructor(private formMethods: FormMethodsService) { }

  ngOnInit(): void {
    if(this.inputType === 'date') {
      let fechaActual = new Date();
      fechaActual.setDate(fechaActual.getDate() + 2);
      this.fechaMinima = fechaActual.toISOString().slice(0, 10);
    }
  }

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

  onDateChange(event: any) {
    this.ngModelPropertyChange.emit(event.target.value);
  }
}
