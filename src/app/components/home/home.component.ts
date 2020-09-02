import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../article-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  base: boolean = false;
  article: any = [{}]

  constructor(private ArticleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.article = this.ArticleService.callLatest()
  }

}
