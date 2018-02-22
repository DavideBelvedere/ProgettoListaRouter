import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { EditComponent } from '../components/edit/edit.component';
import { DetailComponent } from '../components/detail/detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';


const routes: Routes = [
    {path:"home", component: HomeComponent},//dichiaro il path del componente home
    {path:"list", component: ListComponent},//dichiaro il path del componente list
    {path:"edit/:id", component: EditComponent},
    {path:"edit", component: EditComponent},
    {path:"detail/:id", component: DetailComponent},//dichiaro il path del componente detail a cui viene passato un id
    {path:"", redirectTo:"/home", pathMatch: "full"},//all'inizio accederà ad home
    {path:"**", component: PageNotFoundComponent}
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