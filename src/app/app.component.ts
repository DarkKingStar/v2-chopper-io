import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'chopper';
  constructor(private renderer: Renderer2) {
    
  }
  ngOnInit(): void {
    if (!this.isWebKitSupported()) {
      // Apply non-WebKit scrollbar styles
      console.log("Non-WebKit scrollbar styles applied");
      const htmlTag = document.documentElement;
      this.renderer.setStyle(htmlTag, 'scrollbar-width', 'thin');
      this.renderer.setStyle(htmlTag, 'scrollbar-color', 'var(--theme-color) transparent');
    }
  }
  isWebKitSupported(): boolean {
    const userAgent = navigator.userAgent;

    // Check for WebKit engine (including Safari, older Chrome)
    const isWebKit = /AppleWebKit/.test(userAgent);
    
    // Check for Blink engine (used by newer versions of Chrome)
    const isBlink = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);

    return isWebKit || isBlink;
  }
}
