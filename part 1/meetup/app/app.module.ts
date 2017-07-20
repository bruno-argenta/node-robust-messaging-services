
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainPrivateComponent }  from './private/components/main/main.private.component';
import { MainComponent }  from './components/main/main.component';
import { HeaderComponent }  from './private/components/header/header.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { ModifyComponent } from './components/modifyFile/modify.component';
import { UserListComponent } from './private/components/user/list/user.list.component';
import { UserDetailComponent } from './private/components/user/detail/user.detail.component';
import { ProjectListComponent } from './private/components/project/list/project.list.component';
import { TimesheetComponent } from './private/components/timesheet/timesheet.component';

import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [    
    { path: 'modify', component: ModifyComponent},
    { path: '',   redirectTo: '/modify', pathMatch: 'full' },    
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpModule,
      JsonpModule,
      FormsModule
  ],
  declarations: [ MainComponent, MainPrivateComponent, HeaderComponent, PageNotFoundComponent, HeaderComponent, UserListComponent,
                ProjectListComponent, UserDetailComponent, TimesheetComponent,ModifyComponent],
  bootstrap:    [ MainComponent]
})
export class AppModule { }