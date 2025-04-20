import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ngx-ckeditor';
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { NotificationService } from './shared/Notification.service';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TscodeComponent } from './MES/tscode/tscode.component';
import { A01Component } from './MES/a01/a01.component';
import { TscodeDetailComponent } from './MES/tscode-detail/tscode-detail.component';
import { WMPPLAYComponent } from './MES/wmp-play/wmp-play.component';
import { A01PNADDComponent } from './MES/a01-pnadd/a01-pnadd.component';
import { A01FileComponent } from './MES/a01-file/a01-file.component';
import { C02Component } from './MES/c02/c02.component';
import { B09Component } from './MES/b09/b09.component';
import { C02STOPComponent } from './MES/c02-stop/c02-stop.component';
import { C02LISTComponent } from './MES/c02-list/c02-list.component';






@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomepageComponent,    
    TscodeComponent,
    TscodeDetailComponent,  
    A01Component, WMPPLAYComponent, A01PNADDComponent, A01FileComponent, C02Component, B09Component, C02STOPComponent, C02LISTComponent,   

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule,
    ChartsModule,
    CKEditorModule,
  ],
  providers: [
    CookieService,
    NotificationService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
