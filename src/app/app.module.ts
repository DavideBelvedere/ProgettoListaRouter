import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GamesRouterModule } from './routers/router.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListVideogame } from './services/list-videogame.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AuthguardService } from './services/authguard.service';
import { CanDeactivateEditService } from './services/can-deactivate-edit.service';
import { AuthguardLoginService } from './services/authguard-login.service';
import { ListUserService } from './services/list-user.service';
import { ListGeneresService } from './services/list-generes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    ListComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GamesRouterModule

  ],
  providers: [ListVideogame, LoginService, AuthguardService, AuthguardLoginService,CanDeactivateEditService,ListUserService,ListGeneresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
