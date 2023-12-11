import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
 title: string = 'Mi contador';
 conter: number =0;
 base: number= 5;

 aggregate(base:number){
  this.conter +=base;
 }

 less(){
  this.conter-=this.base;
 }
}
