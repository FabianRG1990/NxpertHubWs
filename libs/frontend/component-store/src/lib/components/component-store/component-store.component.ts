import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-component-store',
  imports: [CommonModule],
  templateUrl: 'component-store.component.html',
  styleUrl: 'component-store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentStoreComponent {}
