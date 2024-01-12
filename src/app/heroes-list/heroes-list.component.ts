import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [RouterOutlet, Child1Component, RouterLink],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent {}
