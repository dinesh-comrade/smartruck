import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smartruck';
}
