import { Injectable } from '@nestjs/common';
import { smart } from '../info/smartinfo';
import { mainName } from '../info/smartinfo';

@Injectable()
export class SmartService {
    getListSmart():any{
        return smart
    }
    getMainName():string{
        return mainName.name
    }
}
