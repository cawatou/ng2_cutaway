import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }   from './index.component';
import { WorkComponent }      from './work.component';


const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
