import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from '../aside/aside.component';
import {ArticleComponent} from '../article/article.component';
import {AsideContainerComponent} from '../aside-container/aside-container.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, AsideContainerComponent, ArticleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
