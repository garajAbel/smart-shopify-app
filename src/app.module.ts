import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { Sequelize } from "sequelize";
// import { SequelizeModule } from "@nestjs/sequelize";
import { SmartModule } from './smart/smart.module';
// import { ArticleModule } from './article/article.module';

@Module({
    controllers:[AppController],
    providers:[AppService],
    imports:[
        
    SmartModule]
})
export class AppModule{
    
}