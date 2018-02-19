import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { HomeComponent } from './components/home/home.component';
import { CreatorStudioComponent } from './components/creator-studio/creator-studio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'videos', component: CreatorStudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
