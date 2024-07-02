import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch:'full'
    
  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'newsletter',
    component: NewsletterComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
