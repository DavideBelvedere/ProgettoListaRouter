import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { EditComponent } from '../components/edit/edit.component';
import { DetailComponent } from '../components/detail/detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthguardService } from '../services/authguard.service';
import { CanDeactivateEditService } from '../services/can-deactivate-edit.service';
import { AuthguardLoginService } from '../services/authguard-login.service';


const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthguardService] },//dichiaro il path del componente home
  { path: "login", component: LoginComponent, canActivate: [AuthguardLoginService] },//dichiaro il path del componente home
  { path: "list", component: ListComponent, canActivate: [AuthguardService] },//dichiaro il path del componente list
  { path: "edit/:id", component: EditComponent, canActivate: [AuthguardService] },
  { path: "edit", component: EditComponent, canActivate: [AuthguardService], canDeactivate: [CanDeactivateEditService] },
  { path: "detail/:id", component: DetailComponent, canActivate: [AuthguardService] },//dichiaro il path del componente detail a cui viene passato un id
  { path: "", redirectTo: "/login", pathMatch: "full" },//all'inizio accederà ad home
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRouterModule { }