import { MessageComponent } from './common/message/message.component';
import { ErrorLogHandler } from './common/errorHandler/error-log-handler';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared/shared.module';
import { UtilModule } from './module/util/util.module';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './module/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DinnerComponent } from './module/dinner/dinner.component';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './common/interceptors/interceptorProviders';
import { MessageService } from './common/message/message.service';
import { EnvConfigService } from './common/config/env-config.service';

@NgModule({
  // 這個Module內部Components/Directives/Pipes的列表，聲明這個Module的內部成員
  declarations: [AppComponent, NavbarComponent, DinnerComponent, MessageComponent],
  // 匯入的其他 module 取用他們之中的函式、屬性等等
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // 公開給外部使用的類別
  exports: [],
  // 宣告在這個 module 層級注入的 Services，供 module 底下的組成元件使用
  providers: [
    httpInterceptorProviders,
    MessageService,
    { provide: ErrorHandler, useClass: ErrorLogHandler },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (envConfigService: EnvConfigService) => () => envConfigService.initConfig(),
    //   deps: [EnvConfigService],
    //   multi: true,
    // },
  ],
  // 自動啟用的元件，如: index.html中的app-root
  bootstrap: [AppComponent],
})
export class AppModule { }
