import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const BinaryValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const betControl = control.get('betControl');
  const priceControl = control.get('priceControl');
  return priceControl.value < 0 || betControl.value === null ? { error: true } : null;
};
