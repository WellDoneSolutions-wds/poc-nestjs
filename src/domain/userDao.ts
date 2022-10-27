//  operaciones de escrtirua => dao => loadOne, create, update ,delete

import { User } from './entity';
import { Injectable } from '@nestjs/common';

export interface IGenericDao<T> {
  loadOne(id: string): Promise<T>;
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
}

@Injectable()
export class UserDaoMock implements IGenericDao<User> {
  users: User[] = [];
  async loadOne(id: string): Promise<User> {
    const foundIndex = this.users.findIndex((u) => u.id === id);
    if (foundIndex < 0) throw new Error('NotFound');
    return this.users[foundIndex];
  }
  async create(entity: User): Promise<User> {
    this.users.push(entity);
    console.log(this.users);

    return entity;
  }
  async update(entity: User): Promise<User> {
    const foundIndex = this.users.findIndex((u) => u.id === entity.id);
    if (foundIndex < 0) throw new Error('NotFound');

    this.users[foundIndex] = entity;
    return entity;
  }
}

export class UserDaoMongo implements IGenericDao<User> {
  loadOne(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export class UserDaoPosgress implements IGenericDao<User> {
  loadOne(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
