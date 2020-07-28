import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent implements OnInit {  
  public items:Array<any>=[
    {
      "image":"assets/assets/img/home_usp/icon3.png",
      "description":`Buildrock is an emerging leader in manufacturing 
      admixtures and  other chemicals for the construction industry.
       Our skills and knowledge in the chemicals useful in the construction 
       domain enable us to serve our customers with tailored solutions 
       considering their requirements.`
    },
    {
      "image":"assets/assets/img/home_usp/icon4.png",
      "description":`we create value for our customers, society and ourselves. We offer value-added solutions to our customers. Our skillful understanding of customer's requirements and proficient ability to map them with apt technical solutions enable us to serve customized solutions to every customer.`
    },
    {
      "image":"assets/assets/img/home_usp/icon1.png",
      "description":`Our Team are focused on the challenges faced by global multinationals as well as our Local customers. We work across multiple disciplines, combining global experience with local industry expertise to help our clients meet the challenges of the modern business environment.`
    },
    {
      "image":"assets/assets/img/home_usp/icon2.png",
      "description":`In the process of manufacturing admixtures and other chemicals for the construction industry, at Buildrock, we take the utmost care to reduce the environmental impact of our products and manufacturing systems. We are involved in regular R&D to serve futureproof green solutions to society. We understand our social responsibility and have set-up an efficient management system and eco-friendly industrial process.`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
