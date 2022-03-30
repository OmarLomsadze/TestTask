import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(private elecService: ElectronService) {
  }

  ipcRender(setting: number): void {
    switch (setting) {
      case 1:
        this.elecService.ipcRenderer.send('toggleFullscreen');
        break;
      case 2:
        this.elecService.ipcRenderer.send('alwaysOnTop');
        break;
      case 3:
        this.elecService.ipcRenderer.send('debugInfo');
        break;
      case 4:
        this.elecService.ipcRenderer.send('reloadApp');
        break;
      case 5:
        this.elecService.ipcRenderer.send('exitApp');
        break;
      default:
        break;
    }
  }

}
