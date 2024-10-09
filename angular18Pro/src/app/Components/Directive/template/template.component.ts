import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateDirComponent implements OnInit{

  isUserLoggedIn: boolean = false;
  loggerUserName: string = "Chetan";

  num : number = 1;


  @ViewChild('dyamicTem') dyanTemplate : TemplateRef<any> | undefined;
  @ViewChild('dyamicTem1') dyanTemplate1 : TemplateRef<any> | undefined;
  @ViewChild('dyamicContainer', {read:ViewContainerRef}) dyanContanier : ViewContainerRef | undefined;


  ngOnInit(): void {
      setTimeout(()=>{
        this.num = 2
      }, 3000)
  }


  loadTemplate() {


    if(this.num == 1){
      if(this.dyanTemplate1) {
        this.dyanContanier?.createEmbeddedView(this.dyanTemplate1)
      }
    }
    else{
      if(this.dyanTemplate) {
        this.dyanContanier?.createEmbeddedView(this.dyanTemplate)
      }
    }

  }
}
