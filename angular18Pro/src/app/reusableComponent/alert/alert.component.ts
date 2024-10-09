import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() message: string = '';
  @Input() alertType: string = '';
  alertMode: string = "DEmo Demo";


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }




}
