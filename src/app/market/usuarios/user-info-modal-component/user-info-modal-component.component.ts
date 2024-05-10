import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { UsersServices } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info-modal-component',
  templateUrl: './user-info-modal-component.component.html',
  styleUrls: ['./user-info-modal-component.component.scss']
})
export class UserInfoModalComponentComponent implements OnInit {

  user = sessionStorage.getItem('userLog');
  usuario : any;
  passwordUsuario: string = '';

  userForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
     private userService: UsersServices,
     public dialogRef: MatDialogRef<UserInfoModalComponentComponent>
     ) {

    if (this.user) { 
    this.usuario = JSON.parse(this.user);
      let infouser = this.usuario.infouser
      this.passwordUsuario = infouser.password
    }else{
      console.log('no se encontro la info del usuario');
      
    }
   }
  ngOnInit(): void {


    this.userForm = new FormGroup({
      firstname: new FormControl(this.data.name.firstname),
      lastname: new FormControl(this.data.name.lastname),
      email: new FormControl(this.data.email),
      username: new FormControl(this.data.username),
      phone: new FormControl(this.data.phone),
      street: new FormControl(this.data.address.street),
      city: new FormControl(this.data.address.city),
      zipcode: new FormControl(this.data.address.zipcode),
      number: new FormControl(this.data.address.number),
      lat: new FormControl(this.data.address.geolocation.lat),
      long: new FormControl(this.data.address.geolocation.long),
      password: new FormControl(this.passwordUsuario),
    });

  

  }

  updateUser () {

    const updateuser = {
      email: this.userForm.get('email')?.value ?? '',
      username: this.userForm.get('username')?.value ?? '',
      password: this.userForm.get('password')?.value ?? '',
      name: {
        firstname: this.userForm.get('firstname')?.value ?? '',
        lastname: this.userForm.get('lastname')?.value ?? ''
      },
      address: {
        city: this.userForm.get('city')?.value ?? '',
        street: this.userForm.get('street')?.value ?? '',
        number: this.userForm.get('number')?.value ?? '',
        zipcode: this.userForm.get('zipcode')?.value ?? '',
        geolocation: {
          lat: this.userForm.get('lat')?.value ?? '',
          long: this.userForm.get('long')?.value ?? ''
        }
      },
      phone: this.userForm.get('phone')?.value ?? ''
    };

    this.userService.updateuser(this.data.id, updateuser).subscribe(
      (respuesta) => {
        console.log('Usuario actualizado exitosamente:', respuesta);       
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);       
      }
    );
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'El registro se actualizó correctamente.',
      confirmButtonText: 'Aceptar'
    });
    this.dialogRef.close();
   
    
  }

}
