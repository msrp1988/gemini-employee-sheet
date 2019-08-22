import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-page-f',
  templateUrl: './page-f.component.html',
  styleUrls: ['./page-f.component.scss']
})
export class PageFComponent implements OnInit {

  constructor() { }
  myform: FormGroup;
  signature:FormControl;
  name:FormControl;
  eid:FormControl;
  date:FormControl;
  submitted: boolean = false;

  ngOnInit() {
    this.createForm();
  }
  createForm() { 
    this.myform = new FormGroup({        
      signature: new FormControl('', [Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),    
      name: new FormControl('', [Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),    
      eid: new FormControl('', [Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),  
      date: new FormControl('', [Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),          
  });  
  }
  
   processForm(){    
    if ( this.myform.valid) {
      alert('All fields are filled');  
      // Web service calling   
    } else {
      alert('Please Enter Details');
    }
    {    
      var html="Your name is "+$("#name").val()+
      "<br>Eid is "+$("#eid").val()+
      "<br>date id is "+$("#date").val()+
      "<br>Your signature is "+$("#signature").val();
      $("#bodyModal").html(html);
      }
    }
    submitForm(){
      alert('form submitted successfully');
    }  
  }
  