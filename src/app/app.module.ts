import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ArticleServiceService } from "../app/article-service.service";

import { AllArticlesComponent } from './components/all-articles/all-articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { LatestComponent } from './components/latest/latest.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllArticlesComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NewArticleComponent,
    LatestComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
