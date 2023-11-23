import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'control-password-eye',
  templateUrl: './password-eye.component.html',
})
export class PasswordEyeComponent {
  @Input({ transform: booleanAttribute })
  public isActive: boolean = false;

  @Input()
  public onClick!: () => void;
}
