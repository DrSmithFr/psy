import {Injectable} from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class NotifierService {

  public hasPermission = false;

  constructor() {
    this.hasPermission = Notification.permission === 'granted';
  }

  requestPermission() {
    if (this.hasPermission) {
      console.warn('notification already enabled');
      return;
    }

    Notification.requestPermission().then(permission => {
      this.hasPermission = permission === 'granted';
    });
  }

  notify(title: string, options?: NotificationOptions) {
    if (!this.hasPermission) {
      console.warn('notification disabled');
      return;
    }

    if (!options) {
      options = {
        icon:               '../assets/icons/icon-192x192.png',
        lang:               'string',
        requireInteraction: false,
        vibrate:            2,
      };
    }

    navigator
      .serviceWorker
      .getRegistration()
      .then(reg => reg.showNotification(title, options))
      .catch(err => alert('Service Worker registration error: ' + err));
  }

  overviewNotif() {
    this.notify(
      'Overview',
      {
        icon:      '../assets/logo_big.png',
        lang:      'fr_FR',
        body:      'Time for your report !',
        tag:       'overview',
        timestamp: Date.now() + 1000 * 60 * 30,
        vibrate:   [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
        data: {
          url: '/mood/overview'
        }
      }
    );
  }
}
