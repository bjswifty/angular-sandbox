import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieListComponent } from "./components/movie-list.component";

@Component({
  selector: 'movie-page',
  standalone: true,
  imports: [RouterLink, MovieListComponent],
  template: `
    <section>
      <h1>Movies</h1>
      <movie-list></movie-list>
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
