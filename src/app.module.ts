import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './domain/user.service';
import { UserCtrl } from './domain/UserCtrl';
import { UserDaoMock } from './domain/userDao';

@Module({
  imports: [],
  controllers: [AppController, UserCtrl],
  providers: [AppService, UserDaoMock, UserService],
})
export class AppModule {}
