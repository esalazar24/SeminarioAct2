import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Http, HttpResponse } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public usuarios:Usuario[]=[];
  public usuario= new Usuario()
  public url = environment.backend
  http: any;
  constructor(private router:Router,) { }


  Logearse = async (email: string, password: string): Promise<any> => {
    try {
      // Lógica para iniciar sesión y obtener el token desde tu backend
      const response: HttpResponse = await Http.post({
        url: environment.backend + 'users/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password
        }
      });

      const token = response.data.token;

      if (token) {
        // Almacenar el token en localStorage
        localStorage.setItem('token', token);

        // Redireccionar según el rol después del inicio de sesión
        const user = await this.Quien(token); // Obtener información del usuario
        if (user && user.rol === 'admin') {
          this.router.navigate(['/admin']);
        } else if (user && user.rol === 'estudiante') {
          this.router.navigate(['/estudiante']);
        } else {
          // Otra lógica de redireccionamiento
        }
      } else {
        console.error('Token no recibido después del inicio de sesión');
      }

      return response;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw new Error('Error al iniciar sesión');
    }
  };
/*
  Logearse = async (email: string, password: string) => {
    const datos={email:email,password:password}
    const options = {
      url: environment.backend + 'users/login',
     headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },

      data:datos
    };

    const response: HttpResponse = await Http.post(options);
    return response;


  };
*/



  async alluser():Promise<any>{
    this.usuarios=[]
    const options = {
      url: this.url+'/signup'
    };

  const response: HttpResponse = await CapacitorHttp.get(options);
    console.log(response.data)
        response.data.forEach((item:any)=> {
          this.usuario=new Usuario();
          this.usuario.SetValores(item)
          this.usuarios.push(this.usuario)
        });
        return this.usuarios
  }

  Quien = async (token: string): Promise<any> => {
    try {
      const response: HttpResponse = await Http.get({
        url: environment.backend + 'whoAmI',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      throw new Error('Error al obtener información del usuario');
    }
  };
/*
Quien = async (token: string) => {
  try {
    const options = {
      url: environment.backend + 'whoAmI',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    const response: HttpResponse = await Http.get(options);
    const user = response.data; // Suponiendo que 'data' contiene la información del usuario, incluido el rol

    if (user && user.rol) {
      return user; // Devuelve toda la información del usuario, incluido el rol
    } else {
      throw new Error('Rol del usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener el usuario', error);
    throw error; // Manejar el error de manera apropiada o propagarlo
  }
};
*/

  Registro = async (usuario:Usuario) =>{

    const options ={
      url: environment.backend + 'signup',
      headers: {
        accept :'application/json',
        'Content-Type': 'application/json'

    },

    data: usuario
  };
  const response: HttpResponse = await Http.post(options);
  if (response.status==200) {
    alert("Usuario guardado exitosamente")
    this.router.navigate(['sesion'])
  }else{
    alert("Error en el servidor")

  }
  return response;
};


}
