import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { Name } from "./name.type";

@Component({
  selector: 'app-name-signal',
  standalone: true,
  template: `
    <h2><ng-content header>Default equality check</ng-content></h2>
    <p>nameSignal - {{ name().name }}</p>
    <p>Upper Name: {{ upperName() }}</p>
    <p>trigger - {{ trigger }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameSignalComponent {
  name = input.required<Name>();

  trigger = 0;
  upperName = computed(() => {
    this.trigger = this.trigger + 1;
    return (this.name().name).toUpperCase();
  })
}
