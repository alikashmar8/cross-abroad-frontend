import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApplyNowComponent } from './pages/apply-now/apply-now.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apply-now', component: ApplyNowComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
