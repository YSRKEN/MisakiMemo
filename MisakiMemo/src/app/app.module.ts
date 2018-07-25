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
import { SettingService } from './service/setting.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './service/database.service';
import { ImportExportComponent } from './import-export/import-export.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterComponent,
    ListComponent,
    ImportExportComponent
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
