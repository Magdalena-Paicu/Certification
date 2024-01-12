import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(
    private service: UsersService,
    private routeActivated: ActivatedRoute,
    private router: Router
  ) {}

  users: User[] = [];

  goToUserDetails(name: string, id: number) {
    this.router.navigate(['/user-details', name, id], {
      queryParams: {
        name: name,
        id: id,
      },
    });
  }

  ngOnInit() {
    this.routeActivated.data.subscribe((values) => {
      this.users = values['users'];
    });
  }
}
