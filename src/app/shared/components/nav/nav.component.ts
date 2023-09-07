import { Component } from '@angular/core';
import { CONFIG } from './nav.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  routes = CONFIG;

}
