import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteArticleService } from 'src/services/delete-article.service';
@Controller('articles')
export class DeleteArticleController {
  constructor(private service: DeleteArticleService) {}
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.delete(+id);
    return;
  }
}
