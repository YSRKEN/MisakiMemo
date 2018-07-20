import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { SettingService } from './setting/setting.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
