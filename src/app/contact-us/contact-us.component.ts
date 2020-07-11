import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map,delay, mergeAll, switchMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }

  public test(){
    

  }

}
