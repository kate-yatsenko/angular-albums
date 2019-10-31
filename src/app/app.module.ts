import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './modules/pages/sign-in-page/sign-in-page.component';
import { AlbumsPageComponent } from './modules/pages/albums-page/albums-page.component';
import { PhotosPageComponent } from './modules/pages/photos-page/photos-page.component';
import { HeaderComponent } from './core/header/header.component';
import { SignInFormComponent } from './modules/components/sign-in-form/sign-in-form.component';
import { AlbumsService } from './core/services/albums/albums.service';
import { AuthService } from './core/services/auth/auth.service';
import { PhotosService } from './core/services/photos/photos.service';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './store/reducers';
import { AlbumsEffects } from './store/effects/albums.effect';
import { AuthEffects } from './store/effects/auth.effect';
import { PhotosEffects } from './store/effects/photos.effect';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    AlbumsPageComponent,
    PhotosPageComponent,
    HeaderComponent,
    SignInFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AlbumsEffects, AuthEffects, PhotosEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumsService,
    AuthService,
    PhotosService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
