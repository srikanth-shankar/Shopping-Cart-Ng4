import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:AuthService, private router:Router, private us:UserService){
    authService.user$.subscribe(user=>{
      if(user){
        us.save(user);
        let retUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(retUrl);
      }
    });
  }
}
