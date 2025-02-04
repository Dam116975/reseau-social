import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {MainComponent} from '../main/main.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NavbarComponent,MainComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
