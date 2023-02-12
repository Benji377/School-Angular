import { AbstractControl, ValidationErrors, FormGroup, FormArray } from '@angular/forms';
import { ItemService } from './ItemService';

export class FormValidator {

  static idIsValid(is: ItemService) {
    return async function (control: AbstractControl): Promise<ValidationErrors | null> {
      let validId = false;
      const data = await is.checkIdExists(control.value).catch(_ => null);

      if (!data) {
        let item_id = control.value;
        if ((item_id.startsWith('IT') && item_id.length == 8) || (item_id.startsWith('DE') && item_id.length == 10)) {
          validId = true;
        }
      }
      return validId ? null : { idIsValid: true };
    }
  }

  static priceIsValid(fg: AbstractControl): ValidationErrors | null {
    const pprice = (fg as FormGroup).controls.purchaseprice.value;
    const rprice  = (fg as FormGroup).controls.retailprice.value;
    let valid = false;

    if (pprice && rprice && pprice <= rprice) {
      valid = true;
    }
    return valid ? null : { priceIsValid: true };
  }

  static urlIsValid(fa: AbstractControl): ValidationErrors | null {
    var imagearr = (fa as FormArray).controls;
    let unique = [...new Set(imagearr)];

    return imagearr.length == unique.length ? null : { uniqueImage: true };
  }
}
