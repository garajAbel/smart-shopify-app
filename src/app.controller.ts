import { Controller, Get, Redirect,Post,Body, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Param } from "@nestjs/common";
import { Render } from "@nestjs/common";

@Controller('/1')
export class AppController{
    
    constructor(private readonly appService:AppService){}
    
}