import { Component, OnInit } from '@angular/core';
import { Form } from '../../form';
import { ArticleServiceService } from '../../article-service.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  model: Form;
  test() {
    console.log(this.model);
  }
  publishArticle() {
    this.ArticleService.addArticle(this.model);
  }

  constructor(private ArticleService: ArticleServiceService) {}

  ngOnInit(): void {
    this.model = new Form('', '', '', '');
    console.log(this.model.title);
  }
}
