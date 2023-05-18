import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label for="terms">Show Terms and Conditions</label>
    <input type="checkbox" id="terms" (change)="show = !show">
    <fieldset *ngIf="show">
      <legend>Terms and Conditions</legend>
      <hr />
      <p>1st Condition</p>
      <p>2nd Condition</p>
      <p>3rd Condition</p>
    </fieldset>
    <ng-template [ngIf]="!show">{{title}}</ng-template>
    <hr />
    <ol>
      <li *ngFor="let hero of avengers">{{hero}}</li>
    </ol>
  `,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show: boolean = false;
  avengers = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America', 'Black Widow', 'Hawk Eye', 'Groot', 'Ant Man'];
}
