import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, catchError, map } from 'rxjs';
import { onLogin, onLoginFailureAction, onLoginSuccessAction } from '../actions';
import { appState } from '../selectors';

@Injectable()
export default class AuthenticationEffect {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onLogin),
            map((state) => {
                // console.log('tap state', state);
                const { usernameFC, passwordFC } = state;
                if (usernameFC === 'admin@admin.com' && passwordFC === 'admin123') {
                    return onLoginSuccessAction({ isSuccess: true });
                } else {
                    return onLoginFailureAction({ isError: true });

                }
            }),
            catchError((err) => EMPTY)
        )
    );


    constructor(private actions$: Actions, private store: Store<appState>) { }
}