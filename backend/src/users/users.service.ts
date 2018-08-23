import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interface/user.interface';
import { Client } from 'node-rest-client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

    showUSDetails(callback)  {
        var client = new Client();
        let response: string = "ERROR!!";
        client.get("https://restcountries.eu/rest/v2/name/united", function (data, response) {
            //console.log("finished");
            callback(data);
        });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }
    
    async getUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
      }


}
