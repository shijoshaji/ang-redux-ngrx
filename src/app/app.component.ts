import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public userForm!: FormGroup;
  public usernameFC !: FormControl;
  public passwordFC !: FormControl;
  isSuccess!: boolean;
  isError!: boolean;

  constructor(private fb: FormBuilder) { }



  submitForm() {
    console.log('submitted', this.userForm.value);

    const { usernameFC, passwordFC } = this.userForm.value;
    if (usernameFC === 'admin@admin.com' && passwordFC === 'admin123') {
      this.isSuccess = true;
      this.isError = !this.isSuccess;
      return;
    }
    this.isError = true;
    this.isSuccess = !this.isError;

  }

  initForm() {
    this.usernameFC = new FormControl('', [Validators.required, Validators.email]);
    this.passwordFC = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.userForm = this.fb.group({
      usernameFC: this.usernameFC,
      passwordFC: this.passwordFC

    });

  }


  ngOnInit(): void {
    console.log('Hi there');

    this.initForm();


  }

}
