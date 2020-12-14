import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-likes-pages',
  templateUrl: './likes-pages.component.html',
  styleUrls: ['./likes-pages.component.css']
})
export class LikesPagesComponent {
@Input()
username:String=undefined;
likes:number=1;
dislikes:number=1;

@Output()
likesCount : EventEmitter<number> = new EventEmitter<number>();

@Output()
dislikesCount : EventEmitter<number> = new EventEmitter<number>();

likeOnClick(){
  this.likesCount.emit(this.likes++);
}

dislikeOnClick()
{
  this.dislikesCount.emit(this.dislikes++);
}

clearOnClick(){
  this.likesCount.emit(this.likes =0);
  this.dislikesCount.emit(this.dislikes = 0);
}

}

  

