import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() sidenavToggle = new EventEmitter<void>();

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
