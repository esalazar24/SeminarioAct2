import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anteproy } from '../models/anteproy'; // Importa el modelo de anteproyecto correspondiente

@Injectable({
  providedIn: 'root'
})
export class AnteproyectoService {
  private apiUrl = environment.backend; // URL de tu backend para los anteproyectos

  constructor(private http: HttpClient) { }

  getData(): Observable<HttpResponse<any>> {
    return this.http.get<any>('https://api.example.com/data', { observe: 'response' });
  }
  // Método para crear un nuevo anteproyecto
 /* crearAnteproyecto(anteproyecto: Anteproy): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/antepros`, anteproyecto);
  }*/
  /*crearAnteproyecto(anteproyecto: Anteproy): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/anteproyectos`, anteproyecto); // Ajusta la URL a '/anteproyectos'
  }*/
  crearAnteproyecto(anteproyecto: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/anteproyetos', anteproyecto);
  }
  // Método para obtener todos los anteproyectos
  obtenerAnteproyectos(): Observable<Anteproy[]> {
    return this.http.get<Anteproy[]>(`${this.apiUrl}/antepros`);
  }
  obtenerAnteproyectoPorId(anteproyectoId: number): Observable<Anteproy> {
    return this.http.get<Anteproy>(`${this.apiUrl}/antepros/${anteproyectoId}`);
  }

  // Método para actualizar un anteproyecto existente
  actualizarAnteproyecto(id: number, anteproyecto: Anteproy): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/antepros/${id}`, anteproyecto);
  }

  // Método para eliminar un anteproyecto existente
  eliminarAnteproyecto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/antepros/${id}`);
  }
  agregarItemAnteproyecto(anteproyectoId: number, item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/antepros/${anteproyectoId}/items`, item);
  }

  // Método para obtener todos los items de un anteproyecto
  obtenerItemsAnteproyecto(anteproyectoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/antepros/${anteproyectoId}/items`);
  }

  // Método para eliminar un item de un anteproyecto existente
  eliminarItemAnteproyecto(anteproyectoId: number, itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/antepros/${anteproyectoId}/items/${itemId}`);
  }

}
