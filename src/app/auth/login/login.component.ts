import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }   
    const userLog = this.loginForm.value

    this.loginService.login(userLog).subscribe({
      next: (response: any[]) => {
        console.log(response)
        const tokenUser = response 
        const usuario = {
          token : tokenUser,
          infouser : userLog
        } 
        //guardo la info del usuario en el sesion storage para despues tratarla en el dashboard principal
        sessionStorage.setItem(
          'userLog',
          JSON.stringify(usuario)
        );
        this.router.navigateByUrl('market');
      },
      error: (res: any) => {
        console.log(res.error);
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: res.error 
        });

      },
    });
  }



}
