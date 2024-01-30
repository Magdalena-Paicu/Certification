import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  imports: [ChildComponent, FormsModule],
})
export class ParentComponent implements AfterViewInit, OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChild('inputType') inputType!: ElementRef;
  inputText: string = 'Magda';

  ngOnInit() {
    // console.log(this.inputType);
  }

  ngAfterViewInit(): void {
    this.child.doSomething();
    1;
    this.inputType.nativeElement.classList.add('class');
    console.log(this.inputType.nativeElement);
    this.inputType.nativeElement.value =
      'Add text and manipulate DOM of paragraph';
  }
}
