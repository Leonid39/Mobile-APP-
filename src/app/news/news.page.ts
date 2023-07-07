import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'; 
import {Router} from 'angular/Router'; 
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any ; 
  constructor(private newService: NewsService, private router: Router) { }

  ngOnInit() {
  this.newsService
  .getData('1/archive?')
  .subscribe(data => {
    console.log(data); 
    this.data = data;
  });  
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article; 
    this.router.navigate(['/news-single']);
  }

}
