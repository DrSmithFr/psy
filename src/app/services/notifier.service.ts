import {Injectable} from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class NotifierService {

  constructor() {
  }

  requestPermission() {
    if (!('Notification' in window)) {
      alert('Notification API not supported!');
      return;
    }

    Notification.requestPermission(result => {
    });
  }

  persistentNotification() {
    if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
      alert('Persistent Notification API not supported!');
      return;
    }

    try {
      navigator
        .serviceWorker
        .getRegistration()
        .then(reg => reg.showNotification('Hi there - persistent!'))
        .catch(err => alert('Service Worker registration error: ' + err));
    } catch (err) {
      alert('Notification API error: ' + err);
    }
  }
}
