import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-saludo',
        standalone: true,
        template:`<h1>Hola {{nombre}}</h1>`
    }
)

export class SaludoComponent {
    nombre: string = 'Pepito'
}