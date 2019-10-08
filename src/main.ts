import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// tslint:disable-next-line:prefer-const
let onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};
document.addEventListener('deviceready', onDeviceReady, false);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
