import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map,delay, mergeAll, switchMap, concatMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public siteKey:String="6LfX9LEZAAAAAPuyuRtbCVxzFGZiisLMlwOFG3v7";
  public size="Normal";
  public type;
  public aFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   // window.scroll(0,0);
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  public getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }

  public handleSuccess(event){

  }

  public test(){
    

  }

}
