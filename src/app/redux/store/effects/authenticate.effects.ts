import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { onLogin, onLoginFailureAction, onLoginSuccessAction } from '../actions';

@Injectable()
export default class AuthenticationEffect {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onLogin),
            tap((state) => {
                console.log('tap state', state);
                const { usernameFC, passwordFC } = state;
                if (usernameFC === 'admin@admin.com' && passwordFC === 'admin123') {
                    onLoginSuccessAction({ isSuccess: true });
                } else {
                    onLoginFailureAction({ isError: true });

                }

            })),
        { dispatch: false }
    );


    constructor(private actions$: Actions) { }
}