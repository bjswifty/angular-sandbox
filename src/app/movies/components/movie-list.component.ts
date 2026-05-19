import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <ng-container *ngIf="movies$ | async as movies">
        <p *ngIf="movies.length === 0 && !loading">No movies found.</p>

        <ul *ngIf="movies.length > 0">
          <li *ngFor="let movie of movies">
            {{ movie.title }} ({{ movie.year }})
          </li>
        </ul>
      </ng-container>
    </section>
  `,
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  loading = true;

  movies$: Observable<Movie[]> = this.movieService.getMovies();

  
}