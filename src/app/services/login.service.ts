import { Injectable } from '@angular/core';
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

    // or...
    // const response = await Http.request({ ...options, method: 'POST' })
  };
}
