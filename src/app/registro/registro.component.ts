import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interface/user';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  name :string =''
  password : string=''
  @Output() registerUser = new EventEmitter<User>
  registro(){
    const user:User = {
      name:this.name,
      password:this.password
    }
    this.registerUser.emit(user);
  }
}
