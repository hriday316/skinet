 import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { AccountService } from '../../../core/services/account';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../core/services/snackbar';
import { TextInputComponent } from '../../../shared/components/text-input/text-input';
 

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,MatCard,  MatButton,   TextInputComponent  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private snack = inject(SnackbarService);
  validationErrors?: string[];

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
         this.snack.success('Registration successful. You can now log in.');
          this.router.navigateByUrl('/account/login');
      },
      error: (err) => {
        
        this.validationErrors = err;
      }
       
    });

}
}
