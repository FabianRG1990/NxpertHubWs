import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { componentStore } from './component-store';
import { provideComponentStore } from '@ngrx/component-store';
import { LetDirective, PushPipe } from '@ngrx/component';

@Component({
  selector: 'store-component-store',
  standalone: true,
  imports: [CommonModule, LetDirective, PushPipe],
  templateUrl: 'component-store.component.html',
  styleUrl: 'component-store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(componentStore)]
})
export class StoreComponent {
  readonly componentStore = inject(componentStore);
}
