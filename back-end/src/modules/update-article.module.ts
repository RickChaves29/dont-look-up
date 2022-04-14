import { Module } from '@nestjs/common';
import { UpdateAriticleController } from 'src/controllers/update-article.controller';
import { ArticlesRepository } from 'src/repositories/articles.repository';
import { UpdateArticleService } from 'src/services/update-article.service';

@Module({
  controllers: [UpdateAriticleController],
  providers: [ArticlesRepository, UpdateArticleService],
})
export class UpdateArticleModule {}
