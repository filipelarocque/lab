import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  External modules
import { TreeviewModule } from 'ngx-treeview';
import { DashTreeComponent } from './dash-tree/dash-tree.component';

//  Services
import { FactsService } from './services/facts.service';

@NgModule({
  declarations: [
    AppComponent,
    DashTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeviewModule.forRoot()
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
