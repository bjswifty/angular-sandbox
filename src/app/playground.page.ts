import { Component, signal } from '@angular/core';

@Component({
  selector: 'playground-page',
  standalone: true,
  template: `
    <section>
      <h1>Playground</h1>
      <p>Click the button below to update local state.</p>
      <button type="button" (click)="count.update((value) => value + 1)">
        Clicked {{ count() }} times
      </button>
    </section>
  `,
})
export class PlaygroundPage {
  count = signal(0);
}
