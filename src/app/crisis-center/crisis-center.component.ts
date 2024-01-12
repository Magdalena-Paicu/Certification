import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crisis-center',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './crisis-center.component.html',
  styleUrl: './crisis-center.component.scss',
})
export class CrisisCenterComponent {}
