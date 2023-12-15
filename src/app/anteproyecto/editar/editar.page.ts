import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Anteproy } from 'src/app/models/anteproy';
import { AnteproyectoService } from 'src/app/services/anteproyecto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  [x: string]: any;
  anteproyecto: Anteproy = new Anteproy();
  nuevoItem: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private anteproyectoService: AnteproyectoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const anteproyectoId = params['id']; // Obtener el ID del anteproyecto de la URL

      this.anteproyectoService.obtenerAnteproyectoPorId(anteproyectoId).subscribe(
        (anteproyecto: Anteproy) => {
          this.anteproyecto = anteproyecto;
        },
        (error: any) => {
          console.error('Error al obtener el anteproyecto', error);
        }
      );
    });
  }

  async agregarItem() {
    if (this.nuevoItem.trim() !== '') {
      this.anteproyecto.items.push(this.nuevoItem); // Ahora 'items' es un array de strings, se puede utilizar 'push()'
      this.nuevoItem = '';
    }
  }

  async eliminarItem(index: number) {
    this.anteproyecto.items.splice(index, 1);
  }

  async guardarCambios() {
    this.anteproyectoService.actualizarAnteproyecto(this.anteproyecto.id, this.anteproyecto).subscribe(
      (response: any) => {
        console.log('Anteproyecto actualizado exitosamente', response);
        this.router.navigate(['/admin']);
        // Realizar acciones adicionales si es necesario después de la actualización
      },
      (error: any) => {
        console.error('Error al actualizar el anteproyecto', error);
      }
    );
  }

}
