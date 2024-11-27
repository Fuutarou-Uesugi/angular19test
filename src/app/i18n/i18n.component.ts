import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-i18n',
  imports: [],
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {
  works = $localize`i18n works!`;
}
