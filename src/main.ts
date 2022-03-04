import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { SecRootModule } from './app/test/sec-root/sec-root.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// 測試同時啟動兩個Module進行畫面顯示
// platformBrowserDynamic().bootstrapModule(SecRootModule)
//   .catch(err => console.error(err));
