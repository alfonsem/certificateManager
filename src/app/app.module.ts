import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { NavBarBoardComponent } from './nav-bar-board/nav-bar-board.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './certificate/certificate.component';
import { ShowCertificatesComponent } from './show-certificates/show-certificates.component';
import { DataManagerService } from './data-manager.service';
import { UpCertificateViewComponent } from './up-certificate-view/up-certificate-view.component';
import { JiraComponent } from './jira/jira.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NavBarComponent,
    BoardComponent,
    NavBarBoardComponent,
    CertificateComponent,
    ShowCertificatesComponent,
    UpCertificateViewComponent,
    JiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataManagerService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
