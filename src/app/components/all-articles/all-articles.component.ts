import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../article-service.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css'],
})
export class AllArticlesComponent implements OnInit {
  titles: any = [{}];

  constructor(private ArticleService: ArticleServiceService) {}

  ngOnInit(): void {
    this.titles = this.ArticleService.callTitles();
  }
}
