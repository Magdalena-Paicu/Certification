import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {}
