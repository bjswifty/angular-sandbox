import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'movie-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h1>Movies</h1>
      <p>This page is the shell for a movie list. A REST API will be connected here later.</p>
      <p>Right now it just shows the movie page skeleton and a simple back link.</p>
      <a routerLink="" class="back-link">Back to home</a>
    </section>
  `,
  styles: [
    `
      section {
        padding: 1rem;
      }
      .back-link {
        display: inline-block;
        margin-top: 1rem;
        color: #1976d2;
        text-decoration: none;
      }
    `,
  ],
})
export class MoviePage {}
