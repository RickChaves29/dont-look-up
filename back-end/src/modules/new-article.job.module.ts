import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NewArticleJob } from 'src/jobs/new-article.job';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.spaceflightnewsapi.net/v3/',
    }),
  ],
  providers: [ArticlesRepository, NewArticleJob],
})
export class NewArticleJobModule {}
