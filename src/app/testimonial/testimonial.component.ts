import { Component, OnInit, AfterContentInit, AfterViewInit, HostListener } from '@angular/core';
declare var $: any;
declare var Splide:any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit,AfterViewInit {
  public data = [
    {
      title: "Rajesh Yadav",
      description: `Irrespective of limited experience, Buildrock surprised us by facilitating innovative solutions
      that proved apt for our requirements. The hidden creativity in them has the power to
      bring a positive change in the functioning of the construction industry and the production
      of admixtures. Their wide range of products in addition to their tailor-made solutions and
      all that at competitive pricing without compromising the quality
      will not let anyone go elsewhere.`
    },
    {
      title: 'Sanjeev Sharma',
      description: `The functional constructive solutions offered by Buildrock amazingly increased the speed of our job.
      They lived up to their claims of high-quality products, technical support,
      prompt service, the timely accomplishment of the target. Looking forward to joining hands
      with them in our upcoming projects too.`
    },
    {
      title: "Rajesh Yadav",
      description: `Irrespective of limited experience, Buildrock surprised us by facilitating innovative solutions
      that proved apt for our requirements. The hidden creativity in them has the power to
      bring a positive change in the functioning of the construction industry and the production
      of admixtures. Their wide range of products in addition to their tailor-made solutions and
      all that at competitive pricing without compromising the quality
      will not let anyone go elsewhere.`
    },
    {
      title: 'Sanjeev Sharma',
      description: `The functional constructive solutions offered by Buildrock amazingly increased the speed of our job.
      They lived up to their claims of high-quality products, technical support,
      prompt service, the timely accomplishment of the target. Looking forward to joining hands
      with them in our upcoming projects too.`
    }
  ]

  constructor() { }

  ngAfterViewInit(): void {
    var splide=new Splide('.splide', {
      perPage: window.innerWidth<600?1:2,
    });
    splide.mount();
  }

  ngOnInit(): void {
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   console.log('on resize');
  //   this.ngAfterViewInit();
  // }

  public checkContent(text: String) {
    if (text.length > 200) {
      return text.substr(0, 199) + '...';
    } else {
      return text;
    }
  }

  public startSlide(index){
   var splide=new Splide('.splide');
    splide.mount();
  }
}
