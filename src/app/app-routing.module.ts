import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServiceProvidedComponent } from './components/service-provided/service-provided.component';
import { FooterPortfolioComponent } from './components/portfolio/footer-portfolio/footer-portfolio.component';
import { PubertyHomePageComponent } from './components/portfolio/puberty/pubertyHomePage/puberty-home-page/puberty-home-page.component';
import { Puberty01Component } from './components/portfolio/puberty/puberty-01/puberty-01/puberty-01.component';
import { Puberty02Component } from './components/portfolio/puberty/puberty-02/puberty-02/puberty-02.component';
import { WeddingHomePageComponent } from './components/portfolio/Wedding/wedding-home-page/wedding-home-page.component';
import { Wedding01Component } from './components/portfolio/Wedding/wedding-01/wedding-01/wedding-01.component';
import { Wedding02Component } from './components/portfolio/Wedding/wedding-02/wedding-02/wedding-02.component';
import { Wedding03Component } from './components/portfolio/Wedding/wedding-03/wedding-03/wedding-03.component';
import { BabyShowerHomePageComponent } from './components/portfolio/BabyShower/babyShowerHomePage/baby-shower-home-page/baby-shower-home-page.component';
import { BabyShower01Component } from './components/portfolio/BabyShower/babyShower-01/baby-shower-01/baby-shower-01.component';
import { BrideHomePageComponent } from './components/portfolio/Bride/brideHomePage/bride-home-page/bride-home-page.component';
import { GroomHomePageComponent } from './components/portfolio/Groom/groomHomePage/groom-home-page/groom-home-page.component';
import { EventHomePageComponent } from './components/portfolio/Events/eventHomePage/event-home-page/event-home-page.component';
import { Event01Component } from './components/portfolio/Events/event-01/event-01/event-01.component';
import { Event02Component } from './components/portfolio/Events/event-02/event-02/event-02.component';
import { Wedding04Component } from './components/portfolio/Wedding/wedding-04/wedding-04.component';
import { BackgroundImageChangeComponent } from './components/background-image-change/background-image-change.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'service-provided', component: ServiceProvidedComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'puberty-home-page', component: PubertyHomePageComponent },
  { path: 'puberty-01', component: Puberty01Component },
  { path: 'puberty-02', component: Puberty02Component },
  { path: 'wedding-home-page', component: WeddingHomePageComponent },
  { path: 'wedding-01', component: Wedding01Component },
  { path: 'wedding-02', component: Wedding02Component },
  { path: 'wedding-03', component: Wedding03Component },
  { path: 'wedding-04', component: Wedding04Component },
  { path: 'baby-shower-home-page', component: BabyShowerHomePageComponent },
  { path: 'baby-shower-01', component: BabyShower01Component },
  { path: 'bride-home-page', component: BrideHomePageComponent },
  { path: 'groom-home-page', component: GroomHomePageComponent },
  { path: 'event-home-page', component: EventHomePageComponent },
  { path: 'event-01', component: Event01Component },
  { path: 'event-02', component: Event02Component },
  { path: 'footer-portfolio', component: FooterPortfolioComponent },
  { path: 'background-image-change.component', component: BackgroundImageChangeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
