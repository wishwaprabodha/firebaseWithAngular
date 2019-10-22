import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.exampleForm = this.fb.group({
      userId: ['' ],
      userName: ['', Validators.required ],
      userEmail: ['', Validators.required ],
      userPhoto: ['']
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      userId: new FormControl(''),
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', Validators.required),
      userPhoto: new FormControl(''),
    });
  }

  onSubmit(value) {
    this.userService.createUser(value)
    .then(
      res => {
        this.resetFields();
        // this.router.navigate(['/home']);
      }
    );
  }

}
