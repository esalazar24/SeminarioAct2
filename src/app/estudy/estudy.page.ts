import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudy',
  templateUrl: './estudy.page.html',
  styleUrls: ['./estudy.page.scss'],
})
export class EstudyPage implements OnInit {

  user: any;
  constructor(private loginService: LoginService, private router: Router) { }

  async obtenerDatosUsuario() {
    try {
      const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
      if (token) {
        const response = await this.loginService.Quien(token); // Obtener datos del usuario con el token
        this.user = response; // Asignar los datos del usuario al objeto 'user'
      } else {
        console.error('No se encontró el token de autenticación');
        // Manejar el caso cuando no hay un token en el almacenamiento local
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario', error);
      // Manejar el error al obtener los datos del usuario
    }
  }
  async ngOnInit() {
    await this.obtenerDatosUsuario();
  }

  cerrarSesion() {
    localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
    this.router.navigate(['/']); // Redirigir a la página de inicio de sesión
  }

}
