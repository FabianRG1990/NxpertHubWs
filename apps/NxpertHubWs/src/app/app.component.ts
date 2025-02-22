import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from '@nxpert-hub-ws/component-store';

@Component({
  imports: [RouterModule, StoreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NxpertHubWs';
}
