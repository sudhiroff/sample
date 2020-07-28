import { Component, OnInit } from '@angular/core';
import { Router,Event,NavigationStart,NavigationError,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  //public isPageLoading:Boolean;

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
         // Show loading indicator
          //console.log('nav start')
         // this.isPageLoading=true;
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          //console.log('nav end')
          window.scrollTo(0,0);
          //this.isPageLoading=false;
      }

      if (event instanceof NavigationError) {
         // this.isPageLoading=true;
      }
  });
   
  }
}
