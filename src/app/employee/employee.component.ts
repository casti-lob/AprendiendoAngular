import { Component } from '@angular/core';
import { Employee } from '../interface/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  employee :Employee[]=[
    {
      "nombre": "John",
      "apellido": "Doe",
      "cargo": "Desarrollador",
      "departamento": "Tecnología"
    },
    {
      "nombre": "Jane",
      "apellido": "Smith",
      "cargo": "Diseñadora",
      "departamento": "Diseño"
    },
    {
      "nombre": "Robert",
      "apellido": "Johnson",
      "cargo": "Gerente de Proyecto",
      "departamento": "Administración"
    },
    {
      "nombre": "Emily",
      "apellido": "Davis",
      "cargo": "Analista de Datos",
      "departamento": "Tecnología"
    }
  ]

  
  
}
