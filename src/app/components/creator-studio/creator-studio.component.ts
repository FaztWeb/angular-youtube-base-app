import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-creator-studio',
  templateUrl: './creator-studio.component.html',
  styleUrls: ['./creator-studio.component.css'],
  providers: [VideoService]
})
export class CreatorStudioComponent implements OnInit {

  videos: Video[] = [
    // {_id: '1', title: 'aasdas', description: 'asdasd', url:'google.com'},
    // {_id: '2', title: 'aasdas', description: 'asdasd', url:'google.com'},
    // {_id: '3', title: 'aasdas', description: 'asdasd', url:'google.com'},
  ];

  selectedVideo: Video;
  private hideNewVideoWindow: boolean = true;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(res => this.videos = res)
  }

  onSelectedVideo(video: any) {
    this.selectedVideo = video;
    this.hideNewVideoWindow = true;
  }

  newVideo() {
    this.hideNewVideoWindow = false;
  }

  addVideo(video: Video) {
    this.videoService.addVideo(video)
      .subscribe(res => {
        this.videos.push(res)
        this.selectedVideo = res;
      })
  }

  updateVideo(video: Video) {
    this.videoService.updateVideo(video)
      .subscribe(res => video = res);
    this.selectedVideo = null;
  }

  deleteVideo(video: Video) {
    this.videoService.deleteVideo(video)
      .subscribe(res => {
        for(let i = 0; i < this.videos.length; i++) {
          if(this.videos[i]._id === video._id) {
            this.videos.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  }
}
