import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCreatedCardsComponent } from './pages/my-created-cards/my-created-cards.component';
import { MySaveCardsComponent } from './pages/my-save-cards/my-save-cards.component';
import { PastCardsComponent } from './pages/past-cards/past-cards.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoverPaswordComponent } from './pages/recover-pasword/recover-pasword.component';
import { RegisterComponent } from './pages/register/register.component';
import { TechSupportComponent } from './pages/tech-support/tech-support.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConversationComponent } from './pages/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateCardComponent,
    CardDetailsComponent,
    FaqsComponent,
    LoginComponent,
    MyCreatedCardsComponent,
    MySaveCardsComponent,
    PastCardsComponent,
    ProfileComponent,
    RecoverPaswordComponent,
    RegisterComponent,
    TechSupportComponent,
    AboutUsComponent,
    ChatComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
