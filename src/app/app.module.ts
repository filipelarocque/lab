import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  Components modules
import { MatTreeModule } from '@angular/material';
import { IndicatorTreeComponent } from './indicator-tree/indicator-tree.component';
import { FactsService } from './services/facts.service';

// Services

@NgModule({
  declarations: [
    AppComponent,
    IndicatorTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTreeModule
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
