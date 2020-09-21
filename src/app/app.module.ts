import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AchievementsComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ash-portfolio' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
