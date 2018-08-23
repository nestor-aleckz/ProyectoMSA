import { Controller, Get, Res, Response } from '@nestjs/common';
import * as path from 'path';
import { ROUTE_TEST } from './routes';

@Controller()
export class AppController {
  
  @Get()
  root(@Res() response): void {
    console.log("Requested frontend");
    // the homepage will load our index.html which contains angular logic
    response.sendFile(path.resolve('../../novum/dist/novum/index.html'));
  }

}