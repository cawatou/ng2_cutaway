import { NgModule }                               from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { IndexComponent }                         from './index.component';
import { WorkComponent }                          from './work.component';
import { SocialComponent}                         from './social.component';
import { ContactComponent }                       from './contact.component';
import { NotfoundComponent }                      from './notfound.component';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: 'work', component: WorkComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**',  component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
