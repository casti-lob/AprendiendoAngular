import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador-dos',
  standalone: true,
  imports: [],
  templateUrl: './contador-dos.component.html'
})
export class ContadorDosComponent {
  title: string = 'Mi contador';
  @Input() increment:number=0;
  

  sumar(){

  }

  restar(){

  }

  
}
