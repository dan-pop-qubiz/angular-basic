import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Start</div>
    <div>Hello {{ value }}</div>
    <div>End.</div>`,
})
export class AppComponent {
  value = 'First static web app';
}
