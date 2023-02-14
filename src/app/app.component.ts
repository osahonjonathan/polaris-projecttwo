
import {Component, } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ width: 200, opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave', 
        //   [
        //     style({ width: 200, opacity: 1 }),
        //     animate('1s ease-in', 
        //             style({ width: 0, opacity: 0 }))
        //   ]
        // )
      ]
    )
  ]
 
})
export class AppComponent  {
  constructor(  public  _router: Router) { }

  visible=false;

  togglebar() {
    this.visible = !this.visible;
    
  }

 
  


}






