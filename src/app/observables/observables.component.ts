import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UsersService } from '../users/users.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: User[] = [];
  name: string = '';

  ngOnInit() {
    this.usersService.getUsers().subscribe((values) => {
      this.users = values;
    });
  }
}
