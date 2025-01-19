import { Component } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrl: './modules-home.component.css'
})
export class ModulesHomeComponent {

  constructor() { }

  modalOpen = false;
  items: any = [
    {title: 'Why is the sky is blue?', content: 'The sky is blue because it is'},
    {title: 'Where are the stars?', content: 'The stars are in the sky'},
    {title: 'What color is the grass?', content: 'The grass is green'},
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
