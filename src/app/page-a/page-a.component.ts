import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PAGEAComponent implements OnInit {
  constructor() { }
  myform: FormGroup;
  formno: FormControl;
  issueno: FormControl;
  revno: FormControl;
  fullname: FormControl;
  dob: FormControl;
  gender: FormControl;
  marital: FormControl;
  yearsofexperiance: FormControl;
  designation: FormControl;
  poj: FormControl;
  doj: FormControl;
  eid: FormControl;
  resphone: FormControl;
  bloodgroup: FormControl;
  mobile: FormControl;
  email: FormControl;
  panno: FormControl;
  aadharno: FormControl;
  passportno: FormControl;
  validity: FormControl;
  placeofissue: FormControl;
  pfno: FormControl;
  uanno: FormControl;
  currentresidential: FormControl;
  nearps: FormControl;
  periodofstay: FormControl;
  from: FormControl;
  to: FormControl;
  currentresidentialaddress: FormControl;
  nearbyps: FormControl;
  periodofstay1: FormControl;
  from1: FormControl;
  to1: FormControl;
  fullname1: FormControl;
  phoneI: FormControl;
  address: FormControl;
  phoneII: FormControl;
  relationship: FormControl;
  fullname2: FormControl;
  phoneI1: FormControl;
  address1: FormControl;
  phoneII1: FormControl;
  habitsreview: FormControl;
  healthreview: FormControl;
  operationsreview: FormControl;
  crimereview: FormControl;
  submitted: boolean = false;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({
      formno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      issueno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      revno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      fullname: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      dob: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      gender: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      marital: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      yearsofexperiance: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      designation: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      poj: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      doj: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      eid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      resphone: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      bloodgroup: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mobile: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)]),
      email: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      panno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      aadharno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      passportno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      validity: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      placeofissue: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      pfno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      uanno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      currentresidential: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      nearps: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      periodofstay: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      from: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      to: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      currentresidentialaddress: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      nearbyps: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      periodofstay1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      from1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      to1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      fullname1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phoneI: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      address: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phoneII: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      relationship: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)]),
      fullname2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phoneI1: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      address1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      phoneII1: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]/)
      ]),
      habitsreview: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      healthreview: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      operationsreview: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      crimereview: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
    });
  }

  processForm() {
    if (this.myform.valid) {
      alert('form submitted successfully');
      // Web service calling 

    } else {
      alert('Please Enter Details')
    }
  }

}
