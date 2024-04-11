import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './redux/store';
import { EffectsModule } from '@ngrx/effects';
import AuthenticationEffect from './redux/store/effects/authenticate.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({
      authstore: authReducer
    }),
    EffectsModule.forRoot(AuthenticationEffect)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
