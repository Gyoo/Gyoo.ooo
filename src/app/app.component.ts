import {Component, ElementRef, ViewChild} from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;

  public language = localStorage.getItem('language') ? localStorage.getItem('language') : navigator.language.split('-')[0];

  public availableLocales = ['en', 'fr'];

  public faGithub = faGithub;

  constructor(private translate: TranslateService) {
    registerLocaleData(localeFr, 'fr');
    translate.setDefaultLang('en');
    if (this.availableLocales.includes(this.language)) {
      this.useLanguage(this.language);
    } else {
      this.useLanguage('en');
    }
  }

  useLanguage(language: string) {
    this.language = language;
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
