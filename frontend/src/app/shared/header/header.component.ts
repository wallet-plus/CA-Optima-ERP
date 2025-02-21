import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleLayout() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('layout-compact');
    htmlElement.classList.toggle('layout-menu-expanded');
  }

}
