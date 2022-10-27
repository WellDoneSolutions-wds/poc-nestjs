import { User } from './entity';
import {
  ICreateUserCmd,
  IUpdateUserCmd,
  IUpdateUserDocumentCmd,
} from './model';
import { UserDaoMock } from './userDao';
import { Injectable } from '@nestjs/common';

// mock dev
@Injectable()
export class UserService {
  constructor(private userDao: UserDaoMock) {}

  async create(cmd: ICreateUserCmd) {
    const user = new User(cmd);
    this.userDao.create(user);
  }

  async update(cmd: IUpdateUserCmd) {
    const user = await this.userDao.loadOne(cmd.id);
    user.updateCmd(cmd);
    this.userDao.update(user);
  }

  async updateDocument(cmd: IUpdateUserDocumentCmd) {
    const user = await this.userDao.loadOne(cmd.id);
    user.updateDocumentCmd(cmd);
    this.userDao.update(user);
  }
}
