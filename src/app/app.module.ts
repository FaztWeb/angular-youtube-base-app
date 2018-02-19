import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatorStudioComponent } from './components/creator-studio/creator-studio.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';

import { VideoService } from './services/video.service';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatorStudioComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
