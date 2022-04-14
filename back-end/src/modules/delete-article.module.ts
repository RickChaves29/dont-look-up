import { Module } from '@nestjs/common';
import { DeleteArticleController } from 'src/controllers/delete-article.controller';
import { ArticlesRepository } from 'src/repositories/articles.repository';
import { DeleteArticleService } from 'src/services/delete-article.service';

@Module({
  controllers: [DeleteArticleController],
  providers: [ArticlesRepository, DeleteArticleService],
})
export class DeleteArticleModule {}
