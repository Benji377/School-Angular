import { AbstractControl, ValidationErrors } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { DbService } from './database';
export class ThemeValidator {

    static themeExists(db: DbService) {
        return function (control: AbstractControl): Observable<ValidationErrors | null> {
            return from(db.checkThemeExists(control.value)
                .then(data => data ? { themeExists: true } : null));
        };
    }
}
