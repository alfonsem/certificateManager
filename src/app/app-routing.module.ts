import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { BoardComponent } from './board/board.component';
import { UpCertificateViewComponent } from './up-certificate-view/up-certificate-view.component';
import { JiraComponent } from './jira/jira.component';

const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'board', component: BoardComponent},
  {path: 'certificate-view', component: UpCertificateViewComponent},
  {path: 'jira', component: JiraComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
