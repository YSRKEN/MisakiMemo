import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { SettingService } from './setting/setting.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { DatabaseService } from './setting/database.service';

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
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SettingService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
