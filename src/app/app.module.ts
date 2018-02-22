import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GamesRouterModule } from './routers/router.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    GamesRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
