import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './modules/pages/sign-in-page/sign-in-page.component';
import { AlbumsPageComponent } from './modules/pages/albums-page/albums-page.component';
import { PhotosPageComponent } from './modules/pages/photos-page/photos-page.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', component: SignInPageComponent },
  { path: 'albums', canActivate: [AuthGuard], component: AlbumsPageComponent },
  { path: 'albums/:albumId', canActivate: [AuthGuard], component: PhotosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
