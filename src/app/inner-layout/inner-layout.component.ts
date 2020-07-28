import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.css']
})
export class InnerLayoutComponent implements OnInit {
  public isHide=true;
  constructor() { }

  ngOnInit(): void {
  }
  public url_click(){
    window['collapse']();
  }

  /**
   * sumMenuToggle
   */
  public sumMenuToggle() {
    debugger
    this.isHide=! this.isHide;
  }
}
