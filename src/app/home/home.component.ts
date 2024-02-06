import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {MainComponent} from "../main/main.component";
import {AboutComponent} from "../about/about.component";
import {BlogComponent} from "../blog/blog.component";
import {FormatComponent} from "../format/format.component";
import {NavigationComponent} from "../navigation/navigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    BlogComponent,
    FormatComponent,
    NavigationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
