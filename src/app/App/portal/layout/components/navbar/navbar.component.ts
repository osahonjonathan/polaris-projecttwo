import { Component,EventEmitter,Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
@Output() toggle = new EventEmitter();

showSidebar = false;

toggleSidebar() {
this.showSidebar = !this.showSidebar;
}

}
