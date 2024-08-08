import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceProvidedComponent } from './components/service-provided/service-provided.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PackagesComponent } from './components/packages/packages.component';
import { FooterPortfolioComponent } from './components/portfolio/footer-portfolio/footer-portfolio.component';

import { PubertyHomePageComponent } from './components/portfolio/puberty/pubertyHomePage/puberty-home-page/puberty-home-page.component';
import { WeddingHomePageComponent } from './components/portfolio/Wedding/wedding-home-page/wedding-home-page.component';
import { Wedding01Component } from './components/portfolio/Wedding/wedding-01/wedding-01/wedding-01.component';
import { Wedding02Component } from './components/portfolio/Wedding/wedding-02/wedding-02/wedding-02.component';
import { Wedding03Component } from './components/portfolio/Wedding/wedding-03/wedding-03/wedding-03.component';
import { Puberty01Component } from './components/portfolio/puberty/puberty-01/puberty-01/puberty-01.component';
import { Puberty02Component } from './components/portfolio/puberty/puberty-02/puberty-02/puberty-02.component';
import { BabyShowerHomePageComponent } from './components/portfolio/BabyShower/babyShowerHomePage/baby-shower-home-page/baby-shower-home-page.component';
import { BabyShower01Component } from './components/portfolio/BabyShower/babyShower-01/baby-shower-01/baby-shower-01.component';
import { GroomHomePageComponent } from './components/portfolio/Groom/groomHomePage/groom-home-page/groom-home-page.component';
import { BrideHomePageComponent } from './components/portfolio/Bride/brideHomePage/bride-home-page/bride-home-page.component';
import { EventHomePageComponent } from './components/portfolio/Events/eventHomePage/event-home-page/event-home-page.component';
import { Event01Component } from './components/portfolio/Events/event-01/event-01/event-01.component';
import { Event02Component } from './components/portfolio/Events/event-02/event-02/event-02.component';
import { Wedding04Component } from './components/portfolio/Wedding/wedding-04/wedding-04.component';
import { BackgroundImageChangeComponent } from './components/background-image-change/background-image-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceProvidedComponent,
    ContactUsComponent,
    AboutUsComponent,
    PortfolioComponent,
    PackagesComponent,
    FooterPortfolioComponent,
    PubertyHomePageComponent,
    WeddingHomePageComponent,
    Wedding01Component,
    Wedding02Component,
    Wedding03Component,
    Puberty01Component,
    Puberty02Component,
    BabyShowerHomePageComponent,
    BabyShower01Component,
    GroomHomePageComponent,
    BrideHomePageComponent,
    EventHomePageComponent,
    Event01Component,
    Event02Component,
    Wedding04Component,
    BackgroundImageChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
