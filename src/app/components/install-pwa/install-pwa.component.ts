import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT}                        from '@angular/common';
import {SwUpdate}                        from '@angular/service-worker';

@Component({
  selector: 'app-install-pwa',
  templateUrl: './install-pwa.component.html',
  styleUrls: ['./install-pwa.component.scss']
})
export class InstallPwaComponent {

  public promptEvent: any;
  public displayUpdateBanner;

  constructor(
    private swUpdate: SwUpdate,
    @Inject(DOCUMENT) private document: Document,
  ) {
    // install button display
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    // force update if needed
    swUpdate.available.subscribe(() => {
      this.displayUpdateBanner();
    });
  }

  @HostListener('window:beforeinstallprompt', [])
  onWindowBeforeInstallPrompt() {

  }

  installApplication() {
    this.promptEvent.prompt();
  }
}
