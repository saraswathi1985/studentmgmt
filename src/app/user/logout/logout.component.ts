import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{

  constructor(private sessionService: SessionService,
              private router : Router
  ){}
  timerSec: number =10;
  ngOnInit(): void {
    
    this.sessionService.deleteSession("User");
    setInterval(()=>{
      this.timerSec--;
      if(this.timerSec == 0){
        this.router.navigate(['/login']);
      }
    },1000);
  }
}
