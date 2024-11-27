import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  imports: [],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: '#00ff00',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'red',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ])
    
  ],
})
export class AnimationsComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
