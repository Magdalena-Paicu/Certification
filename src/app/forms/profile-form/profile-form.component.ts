import { HttpClientModule } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CrisisCenterComponent } from '../../crisis-center/crisis-center.component';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CrisisCenterComponent,
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent implements OnInit, AfterViewInit {
  constructor(private formBuilder: FormBuilder) {}

  @ViewChild(CrisisCenterComponent) crisis!: CrisisCenterComponent;

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
  });

  send() {
    const formData: FormData = new FormData();
    const formValue = this.profileForm.value;

    // Adaugă fiecare câmp în FormData
    formData.append('firstname', formValue.firstName || '');
    formData.append('lastname', formValue.lastName || '');

    console.log(formData);
  }

  ngOnInit(): void {
    // this.profileForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.profileForm.get('address')?.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  ngAfterViewInit(): void {
    this.crisis.doSomethig();
  }
}
