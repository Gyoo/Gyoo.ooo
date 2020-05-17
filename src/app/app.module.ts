import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {WebpackTranslateLoader} from '../loader/webpack-translate-loader';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {LandingComponent} from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    HobbiesComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
