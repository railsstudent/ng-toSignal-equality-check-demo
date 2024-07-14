import { ChangeDetectionStrategy, Component, inject, VERSION } from '@angular/core';
import { NameSignalComponent } from './name-signal.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NameSignalComponent],
  template: `
    <h1>Hello from {{ name }} - {{ version }}</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-name-signal [name]="nameSignal()">
      <ng-container select="header">Custom equality check</ng-container>
    </app-name-signal>
    <hr />
    <app-name-signal [name]="nameDefaultSignal()" />
    <button (click)="setName('Jane')">Set to Jane</button>
    <button (click)="setName('John')">Set to John</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = 'Angular';
  version = VERSION.full;

  appService = inject(AppService);
  nameSignal = this.appService.nameSignal;
  nameDefaultSignal = this.appService.nameDefaultSignal;

  setName(name: string) {
    this.appService.setName({ name });
  }
}
