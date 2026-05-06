import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PlaygroundPage } from './playground.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'playground', component: PlaygroundPage },
  { path: '**', redirectTo: '' },
];
