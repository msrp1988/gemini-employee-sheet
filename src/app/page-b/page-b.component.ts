import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss']
})
export class PAGEBComponent implements OnInit {

  constructor() { }
  myform: FormGroup;
  expectedvisa: FormControl;
  typeofvisa: FormControl;
  validity: FormControl;
  passportno: FormControl;
  passportvalidity: FormControl;
  issuinglocation: FormControl;
  countriesvisited: FormControl;
  visarejection: FormControl;
  collegename: FormControl;
  universityname: FormControl;
  from: FormControl;
  to: FormControl;
  graduatedintime: FormControl;
  program: FormControl;
  othersspecify: FormControl;
  studentid: FormControl;
  typeofdegree: FormControl;
  majorsubjects: FormControl;
  mediumofstudy: FormControl;
  percentage: FormControl;
  collegename1: FormControl;
  universityname1: FormControl;
  from1: FormControl;
  to1: FormControl;
  graduatedintime1: FormControl;
  program1: FormControl;
  othersspecify1: FormControl;
  enrolmentid: FormControl;
  typeofdegree1: FormControl;
  majorsubjects1: FormControl;
  mediumofstudy1: FormControl;
  grade: FormControl;
  collegename2: FormControl;
  boardname: FormControl;
  from2: FormControl;
  to2: FormControl;
  enrolmentno: FormControl;
  mediumofstudy2: FormControl;
  percentagegrade: FormControl;
  submitted: boolean = false;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({
      expectedvisa: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      typeofvisa: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      validity: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      passportno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      passportvalidity: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      issuinglocation: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      countriesvisited: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      visarejection: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      collegename: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      universityname: new FormControl('', [Validators.required,
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
      graduatedintime: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      program: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      othersspecify: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      studentid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      typeofdegree: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      majorsubjects: new FormControl('', [Validators.required,
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
      collegename1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      universityname1: new FormControl('', [Validators.required,
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
      graduatedintime1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      program1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      othersspecify1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      enrolmentid: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      typeofdegree1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      majorsubjects1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mediumofstudy1: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      grade: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      collegename2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      boardname: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      from2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      to2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      enrolmentno: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      mediumofstudy2: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z0-9_\.\-]/)
      ]),
      percentagegrade: new FormControl('', [Validators.required,
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
