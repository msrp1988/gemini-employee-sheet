import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.scss']
})
export class PageDComponent implements OnInit {
  constructor() { }
  myform: FormGroup;
  schoolname: FormControl;
  companyname: FormControl;
  address: FormControl;
  phone: FormControl;
  designation: FormControl;
  department: FormControl;
  signature: FormControl;
  employeedate: FormControl;
  To: FormControl;
  eid: FormControl;
  typeofemployment: FormControl;
  ctc: FormControl;
  doj: FormControl;
  dol: FormControl;
  reasonforleaving: FormControl;
  reportingmanager: FormControl;
  position: FormControl;
  mobileno: FormControl;
  hr: FormControl;
  mobileno1: FormControl;
  officephone: FormControl;
  email: FormControl;
  companyname1: FormControl;
  address1: FormControl;
  phone1: FormControl;
  designation1: FormControl;
  department1: FormControl;
  signature1: FormControl;
  employeedate1: FormControl;
  To1: FormControl;
  eid1: FormControl;
  typeofemployment1: FormControl;
  ctc1: FormControl;
  doj1: FormControl;
  dol1: FormControl;
  reasonforleaving1: FormControl;
  reportingmanager1: FormControl;
  position1: FormControl;
  mobileno2: FormControl;
  hr2: FormControl;
  mobileno3: FormControl;
  officephone1: FormControl;
  email1: FormControl;
  submitted: boolean = false;



  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({

      companyname: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      address: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phone: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      designation: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      department: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      signature: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      employeedate: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      To: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      eid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      typeofemployment: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      ctc: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      doj: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      dol: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      reasonforleaving: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      reportingmanager: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      position: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mobileno: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      hr: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mobileno1: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      officephone: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      email: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      companyname1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      address1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phone1: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      designation1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      department1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      signature1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      employeedate1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      To1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      eid1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      typeofemployment1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      ctc1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      doj1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      dol1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      reasonforleaving1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      reportingmanager1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      position1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mobileno2: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      hr2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mobileno3: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      officephone1: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      email1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),

    });
  }

  processForm() {
    if (this.myform.valid) {
      alert('form submitted successfully');
      // Web service calling 

    } else {
      alert('Please Enter Details');
    }
  }

}
