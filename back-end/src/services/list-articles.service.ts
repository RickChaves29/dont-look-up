import { Injectable } from '@nestjs/common';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class ListArticlesService {
  constructor(private repository: ArticlesRepository) {}

  async list(page?: number, limit?: number) {
    if (!page && !limit) {
      page = 0;
      limit = 5;
    }
    if (page && !limit) {
      limit = 5;
    }
    const articles = await this.repository.article.findMany({
      skip: page * limit,
      take: limit,
    });

    return articles;
  }
}
