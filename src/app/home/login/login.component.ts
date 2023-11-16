import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Preferences } from '@capacitor/preferences';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit() {}

  onLogin(){
    //this.email, this.password = Estas variables las estas declarando arriba, pero no son las que viene de la vista .html
    this.loginService.Logearse(this.email, this.password).then(async (res)=>{
      console.log(res.data.token)

        await Preferences.set({
          key: 'token',
          value: res.data.token,
        });
        this.onQuiensoy();

    })
  }
  async onQuiensoy(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
    this.loginService.Quien(value).then((res)=>{
      console.log("Este soy yo", res);
    })
  }

}
