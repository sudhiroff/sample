import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?width=520&height=400&hl=en&q=gurjar%20bhawan%20%20kotla%20mayur%20vihar%20phase%201%20delhi%20Delhi+(Gurjar%20Bhawan)&t=&z=16&ie=UTF8&iwloc=B&output=embed");
  }

  ngOnInit(): void {
  }

}
