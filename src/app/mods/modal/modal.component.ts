import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  onCloseClick() {
    this.close.emit();
  }


  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

}
