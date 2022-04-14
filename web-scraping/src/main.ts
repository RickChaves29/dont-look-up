import { api } from "./api/api.config";
import { prisma } from "./data/prisma.service";

async function main() {
  //let skipArticles = 0;
  await prisma.$connect();
  let skipArticles = 0;
  for (let indexPage = 0; indexPage < 10; indexPage++) {
    for (let index = 0; index < 10; index++) {
      let response = await api.get("articles", {
        params: {
          _start: skipArticles,
        },
      });
      if (!response.data) {
        console.log("Não a mais dados");
        break;
      }
      let data = response?.data[index];
      await prisma.article.createMany({
        data: [
          {
            id: data.id,
            title: data.title,
            url: data.url,
            imageUrl: data.imageUrl,
            newsSite: data.newsSite,
            summary: data.summary,
            publishedAt: data.publishedAt,
          },
        ],
        skipDuplicates: true,
      });
      console.log("Artigos adicionados " + index);
    }
    skipArticles += 10;
    console.log(`Pulando ${skipArticles} items`);
  }
  await prisma.$disconnect();
}
main();
