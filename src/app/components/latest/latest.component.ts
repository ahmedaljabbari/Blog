import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../article-service.service';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private ArticleService: ArticleServiceService) { }
  articles: any = [{}];


  ngOnInit(): void {
    this.articles = this.ArticleService.showLastFive();

  }

}
