import { Controller, Post, Body } from '@nestjs/common';
import { ICreateUserCmd } from './model';
import { UserService } from './user.service';

import { from } from 'rxjs';
import { isEmail } from 'class-validator';
class CreateUserCmd implements ICreateUserCmd {
  // Requried
  //   @isEmail({})
  documentType: 'DNI' | 'PASSPORT';

  documentNumber: string;
  name: string;
  lastname: string;
}

@Controller('/user')
export class UserCtrl {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() cmd: CreateUserCmd) {
    const f = {
      a: {
        s: {},
      },
    };

    const r = this.userService.create(cmd);
    const d = from(r);

    // d.pipe()
  }
}
