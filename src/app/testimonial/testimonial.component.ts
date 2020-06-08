import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sliderCode();
  }

  public sliderCode(){
    if ($('.slider').length) {
      var brandsSlider = $('.slider');
      brandsSlider.owlCarousel(
        {
          loop: false,
          autoplay: false,
          autoplayTimeout: 5000,
          responsiveClass:true,
          nav: false,
          dots: false,
          autoWidth: true,
          items: 4,
          margin: 0
        });

      if ($('.brands_prev').length) {
        var prev = $('.brands_prev');
        prev.on('click', function () {
          brandsSlider.trigger('prev.owl.carousel');
        });
      }

      if ($('.brands_next').length) {
        var next = $('.brands_next');
        next.on('click', function () {
          brandsSlider.trigger('next.owl.carousel');
        });
      }
    }
  }

}
