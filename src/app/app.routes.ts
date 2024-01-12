import { Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { Child1Component } from './heroes-list/child1/child1.component';
import { Child2Component } from './heroes-list/child2/child2.component';
import { UsersComponent } from './users/users/users.component';
import { UsersResolverService } from './users/users-resolver.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { canActivateChildGuard } from './guards/can-activate-child.guard';
import { ProfileFormComponent } from './forms/profile-form/profile-form.component';
export const routes: Routes = [
  {
    path: 'crisis-list',
    component: CrisisCenterComponent,
    canActivateChild: [canActivateChildGuard],
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  {
    path: 'heroes-list',
    component: HeroesListComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  {
    path: '',
    redirectTo: '/profile-form',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UsersResolverService,
    },
  },
  {
    path: 'user-details/:name/:id',
    component: UserDetailsComponent,
    // canActivate: [authGuardGuard],
    // canDeactivate: [leaveComponentGuard],
  },
  {
    path: 'profile-form',
    component: ProfileFormComponent,
  },
];
