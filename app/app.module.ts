import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header.component';
import { FooterComponent }      from './footer.component';
import { IndexComponent }       from './index.component';
import { WorkComponent }        from './work.component';
import { SocialComponent }      from './social.component';
import { ContactComponent }     from './contact.component';
import { NotfoundComponent }    from './notfound.component';

import { ScriptService }        from './script.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    WorkComponent,
    SocialComponent,
    ContactComponent,
    NotfoundComponent
  ],
  providers: [ ScriptService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
