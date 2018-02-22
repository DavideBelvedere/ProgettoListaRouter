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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    ListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GamesRouterModule

  ],
  providers: [ListVideogame],
  bootstrap: [AppComponent]
})
export class AppModule { }
