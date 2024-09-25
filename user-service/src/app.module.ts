import { Module } from '@nestjs/common';
import { UserController } from './app.controller';

@Module({
  controllers: [UserController],
})
export class AppModule {}
