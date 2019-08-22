import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss']
})
export class PAGECComponent implements OnInit {

  constructor() { }
  myform: FormGroup;
  schoolname: FormControl;
  boardname: FormControl;
  from: FormControl;
  to: FormControl;
  studentid: FormControl;
  mediumofstudy: FormControl;
  percentage: FormControl;
  coursedetails: FormControl;
  duration: FormControl;
  subjects: FormControl;
  grade: FormControl;
  institute: FormControl;
  duration1: FormControl;
  subjects1: FormControl;
  grade1: FormControl;
  companyname: FormControl;
  headoffice: FormControl;
  address: FormControl;
  phone: FormControl;
  fax: FormControl;
  designation: FormControl;
  department: FormControl;
  signature: FormControl;
  employeedate: FormControl;
  to1: FormControl;
  eid: FormControl;
  typeofemployment: FormControl;
  responsibilities: FormControl;
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
  pendingobligations: FormControl;
  organization: FormControl;
  referencecheck: FormControl;
  Name: FormControl;
  Designation: FormControl;
  landline: FormControl;
  submitted: boolean = false;

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.myform = new FormGroup({
      schoolname: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      boardname: new FormControl('', [Validators.required,
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
      studentid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mediumofstudy: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      percentage: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      coursedetails: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      duration: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      subjects: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      grade: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      institute: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      duration1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      subjects1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      grade1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      companyname: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      headoffice: new FormControl('', [Validators.required,
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
      fax: new FormControl('', [Validators.required,
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
      to1: new FormControl('', [Validators.required,
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
      responsibilities: new FormControl('', [Validators.required,
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
      pendingobligations: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      organization: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      referencecheck: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      Name: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      Designation: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      landline: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      Validators.pattern(/^[0-9]/)
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
