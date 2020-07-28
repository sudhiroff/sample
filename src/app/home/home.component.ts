import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public whyChooseUs:Object={
    title:"WHY CHOOSE US BUILDROCK?",    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
