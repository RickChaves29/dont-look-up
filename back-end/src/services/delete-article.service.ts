import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class DeleteArticleService {
  constructor(private repository: ArticlesRepository) {}

  async delete(id: number) {
    const hasArticleID = await this.repository.article.findUnique({
      where: {
        id,
      },
    });
    if (!hasArticleID) {
      throw new HttpException(
        `Article ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.repository.article.delete({
      where: { id },
    });
    return;
  }
}
