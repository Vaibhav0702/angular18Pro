import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush  // stop change detection    //  in this case we use ChangeDetectorRef
})
export class AddEmployeeComponent {

  empService = inject(EmployeeService);
  // userList: any[]=[];
  name: string = 'Html';

  userList = signal<any[]>([])

  constructor(private cdRef:ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.empService.getUsers().subscribe((res:any)=>{
      this.userList.set(res);
      this.name = "JAVA";
    })
  }
}
