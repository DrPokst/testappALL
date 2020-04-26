import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { JwtModule } from '@auth0/angular-jwt';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxBarcodeModule } from 'ngx-barcode';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';

import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { ReelCardComponent } from './Reels/reel-card/reel-card.component';
import { ReelDetailComponent } from './Reels/reel-detail/reel-detail.component';
import { ReelEditComponent } from './Reels/reel-edit/reel-edit.component';



import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './ALLregister/register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

import { ListsComponent } from './lists/lists.component';
import { BOMComponent } from './BOM/BOM.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { ComponentCardComponent } from './members/component-card/component-card.component';
import { ComponentDetailComponent } from './members/component-detail/component-detail.component';
import { AuthGuard } from './_quards/auth.guard';
import { ComponentService } from './_services/component.service';
import { AlertifyService } from './_services/alertify.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { ComponentEditResolver } from './_resolvers/component-edit.resolver';
import { PreventUnsavedChanges } from './_quards/prevent-unsaved-changes.guard';
import { ComponentEditComponent } from './members/component-edit/component-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComponentregisterComponent } from './ALLregister/componentregister/componentregister.component';
import { ReelregisterComponent } from './ALLregister/reelregister/reelregister.component';
import { ComponentEdit2Component } from './members/component-edit2/component-edit2.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { AzureloginComponent } from './azurelogin/azurelogin.component';
import { ReelsListComponent } from './Reels/reels-list/reels-list.component';
import { UsedreelListComponent } from './members/usedreel-list/usedreel-list.component';
import { UsedreelListResolver } from './_resolvers/usedreel-list.resolver';
import { MatNativeDateModule } from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { PutReelComponent } from './ReelLocations/put-reel/put-reel.component';
import { TakeReelComponent } from './ReelLocations/take-reel/take-reel.component';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      ComponentCardComponent,
      ComponentDetailComponent,
      BOMComponent,
      ComponentEditComponent,
      SidebarComponent,
      LoginComponent,
      CalendarComponent,
      ComponentregisterComponent,
      ReelregisterComponent,
      ComponentEdit2Component,
      AzureloginComponent,
      ReelsListComponent,
      ReelCardComponent,
      ReelDetailComponent,
      ReelEditComponent,
      UsedreelListComponent,
      PhotoEditorComponent,
      PutReelComponent,
      TakeReelComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatSidenavModule,
      CalendarModule,
      QRCodeModule,
      NgxBarcodeModule,
      MatNativeDateModule,
      ReactiveFormsModule,
      FileUploadModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api.auth']
         }
      }),
      MsalModule.forRoot({
         auth: {
           clientId: 'ad3c3ebb-c300-491f-862c-e6498182e13f',
           authority: 'https://login.microsoftonline.com/afabe9e0-158a-484a-9e5f-8c868459a486',
           redirectUri: 'http://localhost:4200/',
         },
         cache: {
           cacheLocation: 'localStorage',
           storeAuthStateInCookie: isIE, // set to true for IE 11
         },
       },
       {
         popUp: !isIE,
         consentScopes: [
           'user.read',
           'openid',
           'profile',
         ],
         unprotectedResources: [],
         protectedResourceMap: [
           ['https://graph.microsoft.com/v1.0/me', ['user.read']]
         ],
         extraQueryParameters: {}
       })

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ComponentService,
      MemberDetailResolver,
      MemberListResolver,
      ComponentEditResolver,
      UsedreelListResolver,
      PreventUnsavedChanges,
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
