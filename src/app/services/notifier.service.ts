import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {Router} from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class NotifierService {

  public hasPermission = false;

  constructor(
    private swPush: SwPush,
    private router: Router
  ) {
    this.hasPermission = Notification.permission === 'granted';


  }

  onNotificationClick(event: {
    action: string;
    notification: NotificationOptions & {
      title: string;
    };
  }) {
    const notif = event.notification;

    if (notif && notif.data.url) {
      window.location.replace(notif.data.url);
    }

    if (notif && notif.data.uri) {
      this.router.navigateByUrl(notif.data.uri).then(() => {
      });
    }
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
      .catch(err => console.warn('Service Worker registration error: ' + err));
  }

  overviewNotif() {
    this.notify(
      'Overview',
      {
        icon:    '../assets/logo_big.png',
        body:    'Time for your report !',
        tag:     'overview',
        vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
        data:    {
          uri: '/mood/overview'
        }
      }
    );
  }
}
