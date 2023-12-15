import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { AnteproyectoService } from '../services/anteproyecto.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Anteproy } from '../models/anteproy';




@Component({
  selector: 'app-anteproyecto',
  templateUrl: './anteproyecto.page.html',
  styleUrls: ['./anteproyecto.page.scss'],
})
export class AnteproyectoPage implements OnInit {
  public anteproyecto = new Anteproy();

  private url = environment.backend;

  constructor(
    private anteproyectoService: AnteproyectoService,
    private router: Router,) {  }

  ngOnInit() {

  }

  async crearAnteproyecto() {
    /*
    if (this.nombre && this.detalle && this.estado) {
      this.anteproyectoService.crearAnteproyecto({
        nombre: this.nombre,
        detalle: this.detalle,
        estado: this.estado,


        id: undefined,
        items: [],
        setValores: function (item: any): void {
          throw new Error('Function not implemented.');
        }
      }).subscribe(
        (response: any) => {
          console.log('Anteproyecto creado exitosamente', response);
          // Después de crear el anteproyecto, redirigir a la página de administrador y actualizar la lista
          this.router.navigate(['/admin']);
        },
        (error: any) => {
          console.error('Error al crear anteproyecto', error);
        }
      );
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
*/
if (this.anteproyecto.nombre && this.anteproyecto.detalle && this.anteproyecto.estado) {
  this.anteproyectoService.crearAnteproyecto(this.anteproyecto).subscribe(
    (response: any) => {
      console.log('Anteproyecto creado exitosamente', response);
      this.router.navigate(['/admin']);
    },
    (error: any) => {
      console.error('Error al crear anteproyecto', error);
    }
  );
} else {
  alert('Por favor, completa todos los campos.');
}
    }



}
