import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    const alertMode =  this.alertComp?.alertMode;

    console.log("????? value" , value)

    console.log("------------ alertMode" , alertMode)

  }

}
