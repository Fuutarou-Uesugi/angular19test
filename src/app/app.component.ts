import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { I18nComponent } from './i18n/i18n.component';
import { FormsComponent } from './forms/forms.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AnimationsComponent,DragdropComponent,I18nComponent,FormsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
}
