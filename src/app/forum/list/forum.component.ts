import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Splide:any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit,AfterViewInit {

  public data:Array<any>=[
    {
      id:1,
      url:"Apropos_of_Superplasticizers_in_Concrete",
      image:"assets/assets/img/blog/image.png",
      title:""
    },
    {
      id:2,
      url:"elucidating_the_term_Admixtures",
      image:"assets/assets/img/blog/image2.png",
      title:""
    },
    {
      id:3,
      url:"Process_of_Waterproofing_in_Buildings",
      image:"assets/assets/img/blog/image3.png",
      title:""
    },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    let splide1=new Splide('.sliderF', {
      perPage: window.innerWidth<600?1:3,
    });
    splide1.mount();
  }

  ngOnInit(): void {
  }

}
