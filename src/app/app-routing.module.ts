import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LatestComponent } from '../app/components/latest/latest.component';
import { AllArticlesComponent } from '../app/components/all-articles/all-articles.component';
import { NewArticleComponent } from '../app/components/new-article/new-article.component';
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/components/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'latest', component: LatestComponent, pathMatch: 'full' },
  { path: 'all-articles', component: AllArticlesComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'new-article', component: NewArticleComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
