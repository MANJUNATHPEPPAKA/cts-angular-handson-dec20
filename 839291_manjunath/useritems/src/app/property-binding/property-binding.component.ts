import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
isdisabled:boolean=true;
ishidden:boolean=false;

hclick()
{
  this.isdisabled=!this.isdisabled;
  this.ishidden=!this.ishidden;
}
  

}
