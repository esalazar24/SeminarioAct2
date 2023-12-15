export class Usuario {
  public nombre!:String
  public email!:String
  public password:String=""
  public rol!:string

  SetValores(item:any){
    this.nombre=item.nombre
    this.email=item.email
    this.password=item.password
    this.rol=item.rol
  }

}
