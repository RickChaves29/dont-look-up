import { Module } from '@nestjs/common';
import { CreateAriticleController } from 'src/controllers/create-article.controller';
import { ArticlesRepository } from 'src/repositories/articles.repository';
import { CreateArticleService } from 'src/services/create-article.service';

@Module({
  controllers: [CreateAriticleController],
  providers: [ArticlesRepository, CreateArticleService],
})
export class CreateArticleModule {}
