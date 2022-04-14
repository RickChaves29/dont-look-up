import { Injectable } from '@nestjs/common';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class DeleteArticleService {
  constructor(private repository: ArticlesRepository) {}

  async delete(id: number) {
    await this.repository.article.delete({
      where: { id },
    });
    return;
  }
}
