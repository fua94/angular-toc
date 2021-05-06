import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: []
})
export class SignInFormComponent {
  actualUser: User = new User();

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  async onSubmit(ngForm: NgForm){
    try{
      const authResponse = await this.authService.signIn(ngForm.value.email, ngForm.value.password);

      if(authResponse.user){
        this.toastr.success('Login successful!');
        this.router.navigateByUrl('/');
      }
    }catch(error){
      this.toastr.error('Login failed');
      console.error('#sign-in onSumit', error);
    }
  }
}
