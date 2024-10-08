import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../../Pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe , LowerCasePipe , TitleCasePipe , DatePipe , JsonPipe , AsyncPipe , NaPipe ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "vaibhav";

  currentDate: Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;

  student: any = {
    name:'Chetan',
    city:'Pune',
    empId:323,
    state: undefined
  };

  currentRole: string = '';

  constructor() {

    this.currentTime =  interval(1000).pipe(map(()=> new Date()));

  }

}
