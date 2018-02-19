import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Video } from '../video';

import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  private configURL = 'http://localhost:3000/api/videos/'
  
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<Video[]>(this.configURL)
      .map(res => res);
  }

  addVideo(video: Video) {
    return this.http.post<Video>(this.configURL, video)
      .map(res => res);
  }

  updateVideo(video: Video) {
    return this.http.put<Video>(this.configURL + video._id, video)
      .map(res => res);
  }

  deleteVideo(video: Video) {
    return this.http.delete(this.configURL + video._id)
      .map(res => res);
  }
}
