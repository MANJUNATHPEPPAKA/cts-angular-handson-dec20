import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  message:string="helllllo";
  isvalid:boolean=true; 


cde:any=[
{"name":"c","id":3},
{"name":"d","id":6},
{"name":"e","id":9}];



usernames:any=[
  {"id":101,"name":"Alexander","salary":300000,"address":{"state":"A.P","city":"CDE"}},
  {"id":102,"name":"Blexander","salary":300000,"address":undefined},
  {"id":103,"name":"clexander","salary":300000,"address":undefined},
  {"id":111,"name":"CDE",      "salary":300000,"address":{"state":"ban","city":"CDE"}}];
  
  }
  
  


