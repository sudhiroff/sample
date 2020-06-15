import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() width;
  @Input() height;
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=Buildrock%20Construction%20Chemicals%20Binola%2C%20Haryana%20122413&t=&z=13&ie=UTF8&iwloc=&output=embed");
  }

  ngOnInit(): void {
  }

}
