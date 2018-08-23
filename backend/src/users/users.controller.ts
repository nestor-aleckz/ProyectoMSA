import { Controller,Get,Post, Body , Res} from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';


@Controller('api/users')
export class UsersController {
constructor(private readonly usersService: UsersService) {}

    @Get('/test')
    showUSDetails( @Res() res )  {
        let response : string = 'ERROR!!!';
        this.usersService.showUSDetails(function (data) {
            //console.log("RESP >> ",data);
            res.send(data);
        }.bind(this)); 
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }
  
    @Get()
    async findAll(): Promise<User[]> {
      return this.usersService.getUsers();
    }
}
