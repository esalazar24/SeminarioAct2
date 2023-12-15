import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public email: string = '';
  public password: string = '';
  public token:string=""
  constructor(
    public loginService: LoginService,
    public router:Router
  ) { }

  ngOnInit() {}

  onLogin(){
    //this.email, this.password = Estas variables las estas declarando arriba, pero no son las que viene de la vista .html


    if(this.email=="" || this.password==""){
      alert("Ingresa todos los datos")
    }else{
      this.loginService.Logearse(this.email, this.password).then(async (res)=>{
        console.log(res.data.token)

          await Preferences.set({
            key: 'token',
            value: res.data.token,
          });
          if(res.data.token){
            this.onQuiensoy()
          }else{
            alert("Usuario no encontrado, verificar los datos")
          }

      })
  }
  }
  async onQuiensoy(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value) {
      this.loginService.Quien(value).then((res)=>{
        console.log("Este soy yo", res.rol);

        this.router.navigate(['/', res.rol]);  // Redirecciona según el rol
      })
    }

}

    /*
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
    this.loginService.Quien(value).then((res)=>{
      console.log("Este soy yo", res);
      this.router.navigate(['redireccion/'])
    })*/




}
