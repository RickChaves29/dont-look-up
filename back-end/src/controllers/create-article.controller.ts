import { Body, Controller, Post } from '@nestjs/common';
import { CreateArticleDTO } from 'src/dto/create-article.dto';
import { CreateArticleService } from 'src/services/create-article.service';

@Controller('api/v1/articles')
export class CreateAriticleController {
  constructor(private service: CreateArticleService) {}
  @Post()
  async create(@Body() data: CreateArticleDTO) {
    return await this.service.create(data);
  }
}
