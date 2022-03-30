import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElectronService, NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component';
import { IpcService } from './services/ipc.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [IpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
