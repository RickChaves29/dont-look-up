import { Module } from '@nestjs/common';
import { ListOneArticleController } from 'src/controllers/list-one-article.controller';
import { ArticlesRepository } from 'src/repositories/articles.repository';
import { ListOneArticleService } from 'src/services/list-one-article.service';

@Module({
  controllers: [ListOneArticleController],
  providers: [ArticlesRepository, ListOneArticleService],
})
export class ListOneArticleModule {}
