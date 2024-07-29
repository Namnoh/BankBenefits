import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';

const ALL_IMPORTS = [RouterOutlet, NavbarComponent, FooterComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ALL_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'banks-benefits-app';
}