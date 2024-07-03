import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MediabarComponent } from './mediabar/mediabar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CustomersComponent } from './customers/customers.component';
import { Extra1Component } from './extra1/extra1.component';
import { Extra2Component } from './extra2/extra2.component';
import { Extra3Component } from './extra3/extra3.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
register();

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    AwardsComponent,
    TestimonialComponent,
    FooterComponent,
    HomepageComponent,
    NewsletterComponent,
    NavbarComponent,
    MediabarComponent,
    PortfolioComponent,
    CustomersComponent,
    Extra1Component,
    Extra2Component,
    Extra3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
