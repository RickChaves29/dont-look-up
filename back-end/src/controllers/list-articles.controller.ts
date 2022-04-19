import { Controller, Get, Query } from '@nestjs/common';
import { ListArticlesService } from 'src/services/list-articles.service';

@Controller('api/v1/articles')
export class ListArticlesController {
  constructor(private service: ListArticlesService) {}
  @Get()
  async list(@Query('page') page?: string, @Query('limit') limit?: string) {
    return await this.service.list(+page, +limit);
  }
}
