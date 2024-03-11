import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  /*
  * Добавим параметр типа к методу create, показывая, что мы хотим работать
  * с объектом app, как с приложением express.
  */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Сообщим приложению, где искать наши views.
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.useStaticAssets(join(__dirname,'../views','public'))

  // И укажем, какой шаблонизатор использовать
  app.setViewEngine('pug');
  
  await app.listen(3000);
}

// async function start() {
//   const port = process.env.PORT || 5000;
//   const app = await NestFactory.create(AppModule)

//   await app.listen(port,() => console.log('server started on port '+ port))
// }

bootstrap()