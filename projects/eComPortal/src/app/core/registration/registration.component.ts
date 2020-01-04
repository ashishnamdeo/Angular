import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserRegistrationService } from '../services/user-registration.service';
import { CustomValidator } from '../custom-validator/custom-validator';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private userRegistrationService: UserRegistrationService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required])
    }, { Validators: [CustomValidator.validatePassword], updateOn: 'blur'}
    )
  };

//   ngOnInit() {
//     this.registrationForm = this.fb.group({
//       firstName: new FormControl('', Validators.required),
//       lastName: new FormControl('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       mobile: new FormControl('', Validators.required),
//       password: new FormControl('', Validators.required),
//       confirmPassword: new FormControl('', Validators.required),
//       dob: new FormControl('', Validators.required)
//     }, { validators: [CustomValidator.validatePassword], updateOn: 'blur'
//  });
//   }
  onRegister() {
    console.log(this.registrationForm);
    this.userRegistrationService.register(this.registrationForm.value)
      .subscribe((result) => {
        console.log('result *******', result);
        if(result.status === 'success') {
            this.snackBar.open('User Registration is Successful. Please Access your account', 'Registration', {
              duration: 4000,
            });
        }
      });
    //this.registrationForm.reset({});
    //this.registrationForm.markAsPristine();
  }
}
