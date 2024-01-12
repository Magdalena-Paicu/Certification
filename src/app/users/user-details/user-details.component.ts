import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((value) => {
    //   this.id = +value['id'];
    // });

    this.id = +this.activatedRoute.snapshot.params['id'];
  }
}
