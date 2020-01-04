import { Component, OnInit } from '@angular/core';
import { IUser } from '../modal/IUser';
import { UserLoginService } from '../services/user.login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { EncDecService} from '@ecom/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: '',
    password: ''
  }
  constructor(
                private loginService: UserLoginService, 
                private snackBar: MatSnackBar, 
                private router: Router,
                private enService: EncDecService) { }

  ngOnInit() {
  }
  onLogin() {

    this.loginService.login(this.user)
      //console.log('this.user');
      .subscribe((res) => {
        console.log(res);
        if (res.status === 'success') {
          //sessionStorage.setItem('role', res.role);
          const role = this.enService.encrypt(res.role, '')
          sessionStorage.setItem('role', role);
          sessionStorage.setItem('token', res.data);
          this.navigate(res.role)
          this.snackBar.open('Login SuccesFullll', 'Registration', {
            duration: 4000,
          });
        } else {
          this.snackBar.open('Login Failed', 'Registration', {
            duration: 4000,
          });
        }
      })
  }

  navigate( role:string){
    switch(role) {
      case 'User':
        // Redirect to user page
        this.router.navigate(['/user/profile']);
       // console.log(this.router.navigate(['/user/profile']));
        break;
       // return true;
      case 'Admin':
        // Redirect to admin page
        this.router.navigate(['/admin/dashboard']);
        //return false;
        break;
        default:
          this.snackBar.open(' User does not belongs to a Valid USER', 'Login',{
            duration:4000
          })
    } 
  }
}
