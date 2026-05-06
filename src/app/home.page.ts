import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  standalone: true,
  template: `
    <section>
      <h1>Home for Swift Angular Sandbox</h1>
      <p>Welcome to your Angular learning sandbox.</p>
      <p>Use the playground page to try a small interactive example.</p>
    </section>
  `,
})
export class HomePage {}
