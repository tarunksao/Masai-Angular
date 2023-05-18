import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <hr>
    <table>
      <thead>
        <tr>
          <th>S1 #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
          <th>E Mail</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{user.id}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>
            <img [src]="user.avatar" [alt]="user.first_name" width="60">
          </td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-api-call';
  users: any = [];
}
