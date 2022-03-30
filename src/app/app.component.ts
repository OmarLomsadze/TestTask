import { Component, OnInit, ViewChild } from '@angular/core';
import { Constants } from './shared/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  videoSource: string = Constants.Video1

  playNext() {
    this.videoSource = this.videoSource === Constants.Video1 ? Constants.Video2 : Constants.Video1
  }
}
