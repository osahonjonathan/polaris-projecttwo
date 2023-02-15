import { Component,Input,OnInit } from '@angular/core';
import { Router,  NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/App/landingpage/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() visible!:boolean
  

  
  currentRoute!: string;

  constructor(private router: Router, private authservice:AuthService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authservice.logout
    this.router.navigate(['/login']);
  }

}
