import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { StartTrainingComponent } from './start-training/start-training.component';
import { PlanTrainingComponent } from './plan-training/plan-training.component';
import { StrengthComponent } from './strength/strength.component';
import { StaminaComponent } from './stamina/stamina.component';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstWordRedDirective } from './first-word-red.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartTrainingComponent,
    PlanTrainingComponent,
    StrengthComponent,
    StaminaComponent,
    ProfilComponent,
    FirstWordRedDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
