import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  todayDate=new Date();
  name=" Aniket Kale";
  firstname=" Aniket";

  price:number=4.5;
  marks=.60;
  p:number=0;
  getpercent():number{
    this.p=(45+56+20)/300;
    return this.p;
  }
  amount=2000.80;

}