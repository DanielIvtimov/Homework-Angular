import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, NavigationBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
