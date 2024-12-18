import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseMessage, Roles } from '../../decorators/customize';
import { UserRole } from '../../enum/userRole.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @Roles(UserRole.Staff)
  @ResponseMessage('User created successfully')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ResponseMessage('All users fetched successfully')
  @Roles(UserRole.Staff)
  findAll(
    @Query() qs: any
  ) {
    return this.usersService.findAll(qs);
  }

  @Get(':id')
  @ResponseMessage('User fetched successfully')
  @Roles(UserRole.Staff)
  findOne(@Param('id') id: string) {

    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('User updated successfully')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ResponseMessage('User deleted successfully')
  @Roles(UserRole.Staff)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
