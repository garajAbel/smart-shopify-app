import { Injectable } from "@nestjs/common";
import { users } from "./info/appInfo";
import { info } from "./info/appInfo";
@Injectable()
export class AppService{
    getUsers(){
        
        return {
            back:users,
            back2:info
        }
    }
    getUserList(){
        // console.log(users)
        return users
    }
}