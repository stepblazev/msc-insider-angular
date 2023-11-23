import {AbstractControl, ValidatorFn} from '@angular/forms';

export function fioValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const regex = /^[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+$/;

    if (value && !regex.test(value)) {
      return {invalidFullName: true};
    }

    return null;
  };
}
