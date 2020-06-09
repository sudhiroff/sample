import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public products:Array<any>=[
    {image:"03-thumbnail.jpg",text:"CONCRETE SPECIFICATIONS"},
    {image:"06-thumbnail.jpg",text:"FAILURE ANALYSIS OF CONCRETE"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
