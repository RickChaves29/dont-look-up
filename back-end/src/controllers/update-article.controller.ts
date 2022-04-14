import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateArticleDTO } from 'src/dto/update-article.dto';
import { UpdateArticleService } from 'src/services/update-article.service';

@Controller('articles')
export class UpdateAriticleController {
  constructor(private service: UpdateArticleService) {}
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data?: UpdateArticleDTO) {
    return await this.service.update(+id, data);
  }
}
