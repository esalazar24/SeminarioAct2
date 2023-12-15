import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AnteproyectoService } from '../services/anteproyecto.service'; // Importa el servicio para obtener los anteproyectos
import { Anteproy } from '../models/anteproy';
import { ModalController } from '@ionic/angular';
import { AgregarItemsPage } from '../anteproyecto/agregar-items/agregar-items.page';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user: any;
  anteproyectos: Anteproy[] | undefined;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private anteproyectoService: AnteproyectoService,
    private modalController: ModalController) { }

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

  async obtenerAnteproyectos() {
    try {
      const anteproyectos = await this.anteproyectoService.obtenerAnteproyectos().toPromise();
      console.log('Anteproyectos:', anteproyectos); // Agrega este console.log para verificar los anteproyectos obtenidos
      this.anteproyectos = anteproyectos;
    } catch (error) {
      console.error('Error al obtener los anteproyectos', error);
    }
  }

  async eliminarAnteproyecto(anteproyecto: Anteproy) {
    if (confirm('¿Estás seguro que deseas eliminar este anteproyecto?')) {
      this.anteproyectoService.eliminarAnteproyecto(anteproyecto.id).subscribe(
        (response: any) => {
          console.log('Anteproyecto eliminado exitosamente', response);
          // Actualizar la lista después de eliminar el anteproyecto
          this.obtenerAnteproyectos();
        },
        (error: any) => {
          console.error('Error al eliminar anteproyecto', error);
        }
      );
    }
  }

  async actualizarAnteproyecto(anteproyecto: Anteproy) {

    this.router.navigate(['/editar-anteproyecto', anteproyecto.id]);
  }
  async abrirModalAgregarItems(anteproyecto: any) {
    const modal = await this.modalController.create({
      component: AgregarItemsPage, // Nombre de tu página para agregar items
      componentProps: {
        anteproyecto: anteproyecto // Pasar el anteproyecto al modal
      }
    });
    return await modal.present();
  }

  async ngOnInit() {
    await this.obtenerDatosUsuario();
    await this.obtenerAnteproyectos();
  }

  async cerrarSesion() {
    localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
    this.router.navigate(['/']); // Redirigir a la página de inicio de sesión
  }
  }

