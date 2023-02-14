import { Component,EventEmitter,Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }

   

  @Output() toggle: EventEmitter<string> = new EventEmitter();

  toggleSidebar() {
    this.toggle.emit('wassup');
  }





}
