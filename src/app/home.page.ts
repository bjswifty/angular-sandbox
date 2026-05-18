import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h1>Home for Swift Angular Sandbox</h1>
      <p>Welcome to your Angular learning sandbox.</p>
      <p>Use the playground page to try a small interactive example.</p>
      <p>
        <a routerLink="movies">Go to the movie page shell</a>
      </p>
    </section>
  `,
})
export class HomePage {}
