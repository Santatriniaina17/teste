import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CouvertureComponent } from "./components/couverture/couverture.component";
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CouvertureComponent, ServiceComponent, PortfolioComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
