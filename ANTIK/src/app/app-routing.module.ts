import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverPaswordComponent } from './pages/recover-pasword/recover-pasword.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { ChatComponent } from './pages/chat/chat.component'; 
import { ConversationComponent } from './pages/conversation/conversation.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCreatedCardsComponent } from './pages/my-created-cards/my-created-cards.component';
import { MySaveCardsComponent } from './pages/my-save-cards/my-save-cards.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TechSupportComponent } from './pages/tech-support/tech-support.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "recover-pasword", component: RecoverPaswordComponent},
  {path: "about-us", component:AboutUsComponent},
  {path: "card-details", component: CardDetailsComponent},
  {path: "chat", component: ChatComponent},
  {path: "conversation", component: ConversationComponent},
  {path: "create-card", component: CreateCardComponent},
  {path: "faqs", component: FaqsComponent},
  {path: "home", component: HomeComponent},
  {path: "my-created-cards", component: MyCreatedCardsComponent},
  {path: "my-save-cards", component: MySaveCardsComponent},
  {path: "profile", component: ProfileComponent},
  {path: "tech-support", component: TechSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
