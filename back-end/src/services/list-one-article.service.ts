import { Injectable } from '@nestjs/common';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class ListOneArticleService {
  constructor(private repository: ArticlesRepository) {}

  async listOne(id: number) {
    const article = await this.repository.article.findUnique({
      where: {
        id,
      },
    });

    return article;
  }
}
