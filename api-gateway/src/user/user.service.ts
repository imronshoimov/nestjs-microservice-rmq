import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private rabbitClient: ClientProxy) {}

  getUsers() {
    return this.rabbitClient
      .send({ cmd: 'fetch-users' }, {})
      .pipe(timeout(5000));
  }
}
