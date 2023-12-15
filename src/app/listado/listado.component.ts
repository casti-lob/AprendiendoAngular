import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  students: string[]=["Pepito","Susanita","Raquelita"]
  @Input() mensaje: string='';
  @Output() eventoClic = new EventEmitter<string[]>();

  enviarEvento(){
    this.eventoClic.emit(this.students);
  }
}
