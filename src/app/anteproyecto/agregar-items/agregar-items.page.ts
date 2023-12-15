import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agregar-items',
  templateUrl: './agregar-items.page.html',
  styleUrls: ['./agregar-items.page.scss'],
})
export class AgregarItemsPage implements OnInit {
  anteproyecto: any;
  nuevoItem: any;
  itemsAgregados: any;
  constructor(private modalController: ModalController, private navParams: NavParams, private route: ActivatedRoute) { }

  ngOnInit() {
    this.anteproyecto = this.navParams.get('anteproyecto');
    this.route.params.subscribe(params => {
      // Acceder a los parámetros de la URL
      const id = params['id']; // Reemplaza 'id' con el nombre de tu parámetro
      // ... Hacer algo con el parámetro obtenido
    });
  }

  async agregarItem() {
    if (this.nuevoItem.trim() !== '') {
      this.itemsAgregados.push(this.nuevoItem); // Agregar el nuevo item al array local
      this.nuevoItem = ''; // Limpiar el campo después de agregar el item
    }
  }

  async guardarItems() {
    if (this.itemsAgregados.length > 0) {
      this.anteproyecto.items = this.anteproyecto.items.concat(this.itemsAgregados); // Agregar los items al anteproyecto
      this.modalController.dismiss(this.anteproyecto.items); // Cierra el modal y pasa los items agregados
    } else {
      // Manejar el caso cuando no se ha agregado ningún item
      // Puedes mostrar un mensaje o realizar alguna acción apropiada
    }
  }

  async cerrarModal() {
    this.modalController.dismiss(); // Cierra el modal sin pasar los items (en caso de cancelación)
  }

}
