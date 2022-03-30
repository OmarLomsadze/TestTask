import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(private elecService: ElectronService) {
  }

  toggleFullscreen(): void {
    this.elecService.ipcRenderer.send('toggleFullscreen')
  }

  alwaysOnTop(): void {
    this.elecService.ipcRenderer.send('alwaysOnTop')
  }

  debugInfo(): void {
    this.elecService.ipcRenderer.send('debugInfo')
  }

  reloadApp(): void {
    this.elecService.ipcRenderer.send('reloadApp')
  }

  exitApp(): void {
    this.elecService.ipcRenderer.send('exitApp')
  }
}
