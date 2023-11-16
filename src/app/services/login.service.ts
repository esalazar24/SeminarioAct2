import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Http, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  Logearse = async (email: string, password: string) => {
    const options = {
      url: environment.backend + 'users/login',
     headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },

      data: { email: email, password: password },
    };

    const response: HttpResponse = await Http.post(options);
    return response;


  };


  // Example of a GET request
  Quien =async(token: string)=>
  {

    const options = {
      url: environment.backend + 'whoAmI',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      },
      //params: { size: 'XL' },
    };

    const response: HttpResponse = await Http.get(options);
    return response;
    // or...
    // const response = await Http.request({ ...options, method: 'GET' })
  };

  Registro = async (email: string, password: string, nombre: string, estado: string, rol: string) =>{

    const options ={
      url: environment.backend + 'signup',
      headers: {
        accept :'application/json',
        'Content-Type': 'application/json'

    },
    data: {email: email, password: password, nombre: nombre, estado: estado, rol:rol},
  };
  const response: HttpResponse = await Http.post(options);
  return response;
};


}
