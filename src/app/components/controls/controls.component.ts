import { Component, OnInit } from '@angular/core';
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

  ipcRender(setting: number): void {
    this.ipcService.ipcRender(setting);
  }

}
