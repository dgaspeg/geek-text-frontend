import { FormGroup, ValidationErrors, FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  distinctUntilChanged,
  delay
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export function matchingPasswordValidator(
  group: FormGroup
): ValidationErrors | undefined {
  const first = group.get('password');
  const second = group.get('confirmPassword');
  if (first && second && first.value !== second.value) {
    return {
      mismatched: true
    };
  }
}

export function isUsernameAvailable(http: HttpClient) {
  return (
    control: FormControl
  ): Observable<ValidationErrors | null> => {
    const params = new HttpParams().set('username', control.value);
    return http.get<any>(`${environment.apiAddress}/oauth/username`, { params })
    .pipe(
      distinctUntilChanged(),
      delay(500),
      map(data => data.payload === false ? { username: 'cannot be used' } : null),
      catchError(e => {
        return of({ username: 'Unable to verify' });
      })
    );
  };
}
