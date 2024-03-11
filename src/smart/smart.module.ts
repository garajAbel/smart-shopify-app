import { Module } from '@nestjs/common';
import { SmartService } from './smart.service';
import { SmartController } from './smart.controller';

@Module({
    providers:[SmartService],
    controllers:[SmartController],
    imports:[]
})
export class SmartModule {}
