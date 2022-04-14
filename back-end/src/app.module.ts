import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateArticleModule } from './modules/create-article.module';
import { DeleteArticleModule } from './modules/delete-article.module';
import { ListArticlesModule } from './modules/list-articles.module';
import { ListOneArticleModule } from './modules/list-one-aritcle.module';
import { UpdateArticleModule } from './modules/update-article.module';

@Module({
  imports: [
    CreateArticleModule,
    ListArticlesModule,
    ListOneArticleModule,
    UpdateArticleModule,
    DeleteArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
