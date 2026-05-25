import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  template: `
    <section>
    This is the movie list component.
      <ng-container *ngIf="movies$ | async as movies">
        <p *ngIf="movies.length === 0 && !loading">No movies found.</p>

        <ag-grid-angular
          *ngIf="movies.length > 0"
          class="movie-grid"
          [rowData]="movies"
          [columnDefs]="columnDefs"
        />
      </ng-container>
    </section>
  `,
  styles: [
    `
      .movie-grid {
        display: block;
        height: 400px;
        width: 100%;
      }
    `,
  ],
})
export class MovieListComponent {
  private movieService = inject(MovieService);

  loading = true;

  movies$: Observable<Movie[]> = this.movieService.getMovies();

  columnDefs: ColDef<Movie>[] = [
    { field: 'title' },
    { field: 'year' },
  ];
}