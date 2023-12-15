import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario= new Usuario()
  public token:string=""
  constructor(
    private router:Router,
    public loginService: LoginService,
    ) { }

  ngOnInit() {
  }

  nuevo() {
    console.log(this.usuario)
    if(this.usuario.nombre==null || this.usuario.email==null || this.usuario.password==null || this.usuario.rol==null){
      alert("Error en los datos verifca")
    }else{
      this.loginService.Registro(this.usuario)
      this.router.navigate(['/'])
    }
  }

}
