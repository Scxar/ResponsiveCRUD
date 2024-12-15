import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [

{   
    path: '',
    pathMatch: 'full',
    loadComponent() {
        return import('./home/home.component').then((m) => m.HomeComponent)
    }
},
{
    path: 'addbook' ,
    loadComponent() {
        return import ('./addbook/addbook.component').then((m) => m.AddBookComponent)
    }
},

{
    path: 'myquotes' ,
    loadComponent() {
        return import ('./myquotes/myquotes.component').then((m) => m.MyquotesComponent)
    }
},

{
    path: 'login' ,
    loadComponent() {
        return import ('./login/login.component').then((m) => m.LoginComponent)
    },
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

  export class AppRoutingModule {}
