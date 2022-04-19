import { Controller, Get, Param } from '@nestjs/common';
import { ListOneArticleService } from 'src/services/list-one-article.service';

@Controller('api/v1/articles')
export class ListOneArticleController {
  constructor(private service: ListOneArticleService) {}
  @Get(':id')
  async list(@Param('id') id: string) {
    return await this.service.listOne(+id);
  }
}
