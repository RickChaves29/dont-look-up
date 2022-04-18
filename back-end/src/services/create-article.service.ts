import { Injectable } from '@nestjs/common';
import { CreateArticleDTO } from 'src/dto/create-article.dto';
import { ArticlesRepository } from 'src/repositories/articles.repository';

@Injectable()
export class CreateArticleService {
  constructor(private repository: ArticlesRepository) {}

  async create(data: CreateArticleDTO) {
    const { title, url, imageUrl, newsSite, summary } = data;
    await this.repository.article.create({
      data: {
        title,
        url,
        imageUrl,
        newsSite,
        summary,
      },
    });

    return;
  }
}
