import { Controller, Redirect } from '@nestjs/common';
import { Get,Post,Body,Res} from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Render } from '@nestjs/common';
import { SmartService } from './smart.service';

@Controller('/')
export class SmartController {
    constructor(private readonly smartservice:SmartService){}
    public smarts = this.smartservice.getListSmart().smarts
    @Get('/')
    @Render('./smart/main')
    getMain():object{
        const obj = {
            back:{
                smartList:this.smarts,
                mainName:this.smartservice.getMainName()
            }
        }
        return obj
    }
    @Get('/type/:type')
    @Render('./smart/search')
    getSearch(@Param('type') type:string){
        const smarts = this.smarts
        for(let i = 0;i < smarts.length;i++){
            if(smarts[i].type == type){
                return {finded:true,smart:smarts[i]}
            }
            
        }

        return {finded:false}
    }
    @Post('/search')
    getFind(@Body() body:any,@Res() res){
        if(body.type == ''){
            res.redirect('/type/is-not-finded')
        }
        res.redirect('/type/'+body.type,301)
    }
    @Get('/create/1')
    @Render('./smart/create')
    getCreate(){
        return
    }
    @Post('/create')
    @Redirect('/',301)
    create(@Body() body:any){
        const list = {
            type:body.type,
            op:body.op,
            display:body.display,
            price:body.price
        }
        this.smarts.push(list)
    }
    @Get('/delete/1')
    @Render('./smart/delete')
    getDel(){}
    // type:'v2.3',op:false,display:0.23,price:10
    @Post('/delete')
    @Redirect('/delete/1',301)
    delete(@Body() body:any){
        for(let i = 0;i < this.smarts.length ;i++){
            if(body.name == this.smarts[i].type){
                this.smarts.splice(i,1)
                
            }
            
        }
    }
    @Get('/Us')
    @Render('./smart/Us')
    Us(){

    }
}
