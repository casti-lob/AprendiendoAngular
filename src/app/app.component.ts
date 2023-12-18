import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from '../saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { ContadorDosComponent } from './contador-dos/contador-dos.component';
import { RegistroComponent } from './registro/registro.component';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule ,SaludoComponent, ContadorComponent, ListadoComponent ,ContadorDosComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFirst';
  people : string[]=[];
  eventClickManager(mensaje:string[]) {
    this.people = mensaje;
  }
  value:string ='';
  getValue(value:string){
    this.value = value
  }

  name:string=''

  eventContador(){
    
  }
  increment:number=0
  counter:number=0;

  showRegister(user:User){
    alert("Nombre "+user.name+" Contraseña "+user.password )
  }
}
