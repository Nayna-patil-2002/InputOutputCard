import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/component/card/card.component';
import { CardDashboardComponent } from './shared/component/card-dashboard/card-dashboard.component';
import { CardFormComponent } from './shared/component/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TabledashboardComponent } from './shared/component/tabledashboard/tabledashboard.component';
import { TableformComponent } from './shared/component/tableform/tableform.component';
import { TableComponent } from './shared/component/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDashboardComponent,
    CardFormComponent,
    TabledashboardComponent,
    TableformComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
