import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-likes-pages',
  templateUrl: './likes-pages.component.html',
  styleUrls: ['./likes-pages.component.css']
})
export class LikesPagesComponent {
@Input()
username:String=undefined;
@Input()
likesafterclear:number=undefined;





@Input()
dislikesafterclear:number=undefined;
likes:number=1;
dislikes:number=1;

@Output()
likesCount : EventEmitter<number> = new EventEmitter<number>();

@Output()
dislikesCount : EventEmitter<number> = new EventEmitter<number>();

likeOnClick(){
  if(this.likesafterclear==0)
  {
    this.likes=1;
    this.likesafterclear=undefined;
  }
  this.likesCount.emit(this.likes++);
}

dislikeOnClick()
{
  if(this.dislikesafterclear==0)
  {



    this.dislikes=1;
    this.dislikesafterclear=undefined;

  }
  this.dislikesCount.emit(this.dislikes++);
}




}

  

