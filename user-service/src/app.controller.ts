import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class UserController {
  @MessagePattern({ cmd: 'fetch-users' })
  getUsers(@Ctx() context: RmqContext) {
    console.log(context.getMessage());
    return [{ id: 1, name: 'John Doe' }];
  }
}
