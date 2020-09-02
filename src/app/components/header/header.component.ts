import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  callAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated;
  };
  log_out(){
    this.isAuthenticated = false;
    this.LoginService.setValue(false);
    }

  constructor(private LoginService: LoginServiceService) {}

  ngOnInit(): void {
    this.LoginService.getValue().subscribe((value) => {
      this.isAuthenticated = value;
    });
  }
}
