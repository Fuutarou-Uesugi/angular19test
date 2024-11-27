import { Component } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  favoriteColorControl = new FormControl('');
  valor = ''
  ejecutar(){
    this.valor = this.favoriteColorControl.value || ''
  }
}
