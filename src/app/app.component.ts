import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  // Uvozi HeaderComponent kao standalone komponentu

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //standalone: true,
  //imports: [HeaderComponent]  // Dodaj HeaderComponent ovde kao standalone komponentu
})
export class AppComponent {
  title = 'kenoApp';
}
