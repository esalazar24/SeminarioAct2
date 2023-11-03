import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


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
    this.loginService.Logearse(this.email, this.password).then((res)=>{
      console.log(res)
    })
  }
}
