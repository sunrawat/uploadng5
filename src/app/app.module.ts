import { FormsModule } from '@angular/forms';
import { RouterModule,  Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';


import { UserService } from './service/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersdetailComponent } from './usersdetail/usersdetail.component';
import { Route } from '@angular/router/src/config';

const appRoutes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'userlist', component: UserslistComponent , children: [
   {path : 'detail/:name', component: UsersdetailComponent }
  ]
  },
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : '**',  redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserslistComponent,
    UsersdetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: InterceptorService, 
    multi: true 
}, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
