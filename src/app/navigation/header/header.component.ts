import { AuthService } from './../../auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth = false;

  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  @Output() sidenavToggle = new EventEmitter<void>();

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      (auth) => {
        this.isAuth = auth;
        console.log(auth);
      }
    );
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
