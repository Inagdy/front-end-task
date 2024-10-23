import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm:FormGroup=new FormGroup({
    
    email: new FormControl(null),
    username:new FormControl(null),
    password:new FormControl(null),
    name:new FormControl(null),

  })


  // email:'John@gmail.com',
  //                   username:'johnd',
  //                   password:'m38rmF$',
  //                   name:{
  //                       firstname:'John',
  //                       lastname:'Doe'
  //                   },
  //                   address:{
  //                       city:'kilcoole',
  //                       street:'7835 new road',
  //                       number:3,
  //                       zipcode:'12926-3874',
  //                       geolocation:{
  //                           lat:'-37.3159',
  //                           long:'81.1496'
  //                       }
  //                   },
  //                   phone:'1-570-236-7033'

}
