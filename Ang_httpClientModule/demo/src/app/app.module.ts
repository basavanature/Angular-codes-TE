import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
//importe the feature module
// import { FeatureModuleModule } from './feature-module/feature-module.module';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//added to imports
    // FeatureModuleModule//included the imported feature module in imports[]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
