import { Module } from '@nestjs/common';
import { ListArticlesController } from 'src/controllers/list-articles.controller';
import { ArticlesRepository } from 'src/repositories/articles.repository';
import { ListArticlesService } from 'src/services/list-articles.service';

@Module({
  controllers: [ListArticlesController],
  providers: [ArticlesRepository, ListArticlesService],
})
export class ListArticlesModule {}
