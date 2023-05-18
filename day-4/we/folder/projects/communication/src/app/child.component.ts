import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  // inputs: ["quantity"],
  template: `
  <div style="border: 1px solid red; padding: 20px">
    <h2>Child Component</h2>
    <ng-content select=".x"></ng-content>
    <hr>
    <ng-content select="p.box"></ng-content>
    <hr>
    <ng-content select="#apptitle"></ng-content>
    <hr>
    <ng-content></ng-content>
    <div>Quantity {{quantity}}</div>
    <input #ti type="text" >
    <button (click)="clickHandler(ti.value)">Click me</button>
  </div>`
})
export class ChildComponent {
  title = 'Child Component';
  @Input() quantity: number = 0;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();

  clickHandler(message: any) {
    alert('You clicked me');
    this.childEvent.emit(message);
  }
}
