import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateArticleDTO } from 'src/dto/update-article.dto';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class UpdateArticleService {
  constructor(private repository: ArticlesRepository) {}

  async update(id: number, data?: UpdateArticleDTO) {
    const { title, url, imageUrl, newsSite, summary } = data;
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
