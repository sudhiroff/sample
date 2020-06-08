import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.sliderCode();
  }

  public sliderCode(){
    if ($('.brands_slider').length) {
      var brandsSlider = $('.brands_slider');
      brandsSlider.owlCarousel(
        {
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          nav: false,
          dots: false,
          autoWidth: true,
          items: 8,
          margin: 42
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
