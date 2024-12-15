import { Component, signal } from '@angular/core';
import  { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dropdownVisible(): void {
    const x = document.getElementById("dropdown-content") as HTMLElement | null;
    
    if (x) {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  }
  
}
