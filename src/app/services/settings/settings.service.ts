import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private _document,
  ) {
  }

  private saveSettings() {
    localStorage.setItem('theme', JSON.stringify(this.ajustes));
  }

  getSettings() {
    if (localStorage.getItem('theme')) {
      this.ajustes = JSON.parse(localStorage.getItem('theme'));
      this.setTheme(this.ajustes.theme);
    }
  }

  changetheme(url: string, theme: string) {
    this.ajustes.theme = theme;
    this.ajustes.themeUrl = url;

    this.saveSettings();
  }

  setTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.changetheme(url, theme);
  }

}

interface Ajustes {
  themeUrl: string;
  theme: string;
}
