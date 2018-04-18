import { DOCUMENT } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    private settingsService: SettingsService
  ) {  }

  ngOnInit() {
    this.checkTheme();
  }

  changeTheme(tema: string, link: any) {
    this.selectTheme(link);

    this.settingsService.setTheme(tema);
  }

  selectTheme(link: any) {
      const selectores = this._document.getElementsByClassName('selector');
      console.log(selectores);
      for (let selector of selectores) {
        selector.classList.remove('working');
      }

      link.classList.add('working');
  }

  checkTheme() {
    const selectores = this._document.getElementsByClassName('selector');
    console.log(selectores);
    for (let selector of selectores) {
      if(this.settingsService.ajustes.theme === selector.getAttribute('data-theme')){
        selector.classList.add('working');
        return;
      }
    }
  }

}
