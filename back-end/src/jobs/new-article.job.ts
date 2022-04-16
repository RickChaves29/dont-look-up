import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { ArticlesRepository } from 'src/repositories/articles.repository';

interface Launch {
  id: string;
  provider: string;
}

interface Event {
  id: string;
  provider: string;
}

interface IArticles {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: Launch[];
  events: Event[];
}

@Injectable()
export class NewArticleJob {
  private logger = new Logger(NewArticleJob.name);
  constructor(
    private httpService: HttpService,
    private repository: ArticlesRepository,
  ) {}
  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_9AM)
  async handleJob() {
    const { data } = await firstValueFrom(
      this.httpService.get<IArticles[]>('articles'),
    );
    const { id, title, url, imageUrl, newsSite, summary, publishedAt } =
      data[0];
    const hasArticleWithThatID = await this.repository.article.findUnique({
      where: {
        id: id,
      },
    });

    if (hasArticleWithThatID) {
      this.logger.warn('This id already exists');
    }
    if (!hasArticleWithThatID) {
      await this.repository.article.create({
        data: {
          id,
          title,
          url,
          imageUrl,
          newsSite,
          summary,
          publishedAt,
        },
      });
      this.logger.log('Added new article at 9:00PM');
    }
  }
}
