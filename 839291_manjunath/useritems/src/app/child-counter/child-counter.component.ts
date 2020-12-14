import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent  {
counter:number=0;
@Output()
childCounter:EventEmitter<number>=new EventEmitter<number>();
handleClick(){
  this.childCounter.emit(this.counter++);
}
  
  

}
