import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceComponent } from "./components/service/service.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
