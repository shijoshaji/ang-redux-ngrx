import { createAction, createActionGroup, props } from '@ngrx/store';

// type loginStatus = 'success' | 'failure';
enum loginStatus {
    Success = 'success',
    Failure = 'failure'
}

const onLogin = '[App Component] Login Action';
const onLoginSuccess = '[App Component] Login Success Action';
const onLoginFailure = '[App Component] Login Failure Action';

const onLoginAction = createAction(onLogin, props<{ username: string; password: string; }>());
const onLoginSuccessAction = createAction(onLoginSuccess, props<{ status: loginStatus.Success; message: string; }>());
const onLoginFailureAction = createAction(onLoginFailure, props<{ status: loginStatus.Failure; message: string; }>());


export {
    onLogin,
    onLoginSuccess,
    onLoginFailure,
    onLoginAction,
    onLoginSuccessAction,
    onLoginFailureAction
};