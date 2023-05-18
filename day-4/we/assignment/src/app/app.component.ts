import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-topBar />
    <app-header />
    <app-main />
    <app-footer />
  `,
})
export class AppComponent {
  title = 'assignment';
}
