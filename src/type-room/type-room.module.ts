import { Module } from '@nestjs/common';
import { TypeRoomService } from './type-room.service';
import { TypeRoomController } from './type-room.controller';
import { TypeRoom } from './entities/type-room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeRoom])],
  controllers: [TypeRoomController],
  providers: [TypeRoomService],
  exports: [TypeRoomService]
})
export class TypeRoomModule {}
