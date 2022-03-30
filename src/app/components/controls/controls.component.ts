import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private ipcService: IpcService) {}

  ngOnInit(): void {
  }

  toggleFullscreen(): void {
    this.ipcService.toggleFullscreen();
  }

  alwaysOnTop(): void {
    this.ipcService.alwaysOnTop();
  }

  debugInfo(): void {
    this.ipcService.debugInfo();
  }

  reloadApp(): void {
    this.ipcService.reloadApp();
  }

  exitApp(): void {
    this.ipcService.exitApp();
  }

}
