import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    if (!article) {
      throw new HttpException(
        `Article ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return article;
  }
}
