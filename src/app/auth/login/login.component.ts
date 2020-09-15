import { AuthData } from './../auth-data.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let loginData = form.value;
    let userData: AuthData = {
      email: loginData.email,
      password: loginData.password
    }
    this.authService.loginUser(userData);
  }

}
