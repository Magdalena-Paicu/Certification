import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { UsersComponent } from './users/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroesListComponent,
    CrisisCenterComponent,
    RouterLinkActive,
    RouterLink,
    UsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'certification';
}
