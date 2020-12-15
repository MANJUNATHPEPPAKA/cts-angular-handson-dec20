import { Component} from '@angular/core';

@Component({
  selector: 'app-count-pages',
  templateUrl: './count-pages.component.html',
  styleUrls: ['./count-pages.component.css']
})
export class CountPagesComponent  {

name="manju"
likes:number=0;
dislikes:number=0;
   clearOnClick()
{
  this.likes=0;
  this.dislikes=0;
}

}
