import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
