import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    //return 'Hi, I am Michael Calbay';
  }

  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticlesById(@Param('id') id: string): any[] {
    return ARTICLES.find((n) => n._id === id);
  }
}
