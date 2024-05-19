import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('The API description')
    .setVersion('0.1')
    .addTag('test')
    .addTag('api')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  setupSwagger(app)

  await app.listen(3000);
}
bootstrap();
