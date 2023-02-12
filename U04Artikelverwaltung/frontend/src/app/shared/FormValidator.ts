import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { ItemService } from './ItemService';

export class FormValidator {

  static idIsValid(is: ItemService) {
    return async function (control: AbstractControl): Promise<ValidationErrors | null> {
      const data = await is.checkIdExists(control.value).catch(_ => null);
      let validId = false;

      if (!data?.body?.id) {
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

    console.log(`Prices: ${pprice} and ${rprice}`)
    if (pprice && rprice && pprice <= rprice) {
      valid = true;
    }
    return valid ? null : { priceIsValid: true };
  }


}
