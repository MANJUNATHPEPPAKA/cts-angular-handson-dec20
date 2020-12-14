import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {
username:String=undefined;
password:String=undefined;

handleClick(user:string,pas:String){
  this.username=user;
  this.password=pas;
}
  
  

}
