import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServices } from 'src/app/market/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user = sessionStorage.getItem('userLog');
  usuario : any;
  nombreusuario: string = '';


  constructor(private router: Router, private usersService: UsersServices,) { }

  ngOnInit(): void {    
    if (this.user) {  
      this.usuario = JSON.parse(this.user);
      let infouser = this.usuario.infouser
      this.nombreusuario = infouser.username
      // consumo el servicio para buscar la infgo del usuario
      // this.usersService.getUsers().subscribe({
      //   next: (response: any[]) => {
      //     console.log(response) 
      //     const usersList = response
                  
          
      //   },
      //   error: (res: any) => {
      //     console.log(res.error);  
      //   },
      // });
      
      
    } else {
      console.error('No se encontró información de usuario en sessionStorage.');
    }
    
    
      
  }
  

}
