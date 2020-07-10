import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'project1';
  days=[];
  i=0;
  onclick(){
    this.i++;
    this.days.push("Day "+this.i)
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
  tasks=[];
  addtask()
  {
    const taskname=(document.getElementById("titlename") as HTMLInputElement).value;
    this.tasks.push(taskname);
  }
contents=[];
  onclickcontent()
  {
    const contentdetail=prompt("Enter the content","new content");
    this.contents.push(contentdetail);

  }

}
