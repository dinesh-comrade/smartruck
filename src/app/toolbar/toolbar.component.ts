import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {
  selectedPlace: string = 'raigarh';
}
