import { Injectable } from '@nestjs/common';
import { UpdateArticleDTO } from 'src/dto/update-article.dto';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class UpdateArticleService {
  constructor(private repository: ArticlesRepository) {}

  async update(id: number, data?: UpdateArticleDTO) {
    const { title, url, imageUrl, newsSite, summary } = data;
    const article = await this.repository.article.update({
      data: {
        title,
        url,
        imageUrl,
        newsSite,
        summary,
      },
      where: { id },
    });

    return article;
  }
}
