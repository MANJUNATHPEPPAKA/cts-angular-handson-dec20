import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwowaydatabindComponent } from './twowaydatabind/twowaydatabind.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { CountPagesComponent } from './count-pages/count-pages.component';
import { LikesPagesComponent } from './likes-pages/likes-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwowaydatabindComponent,
    ChildCounterComponent,
    ParentCounterComponent,
    CountPagesComponent,
    LikesPagesComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
