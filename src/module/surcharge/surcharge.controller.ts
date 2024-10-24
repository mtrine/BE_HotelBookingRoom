import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SurchargeService } from './surcharge.service';
import { CreateSurchargeDto } from './dto/create-surcharge.dto';
import { UpdateSurchargeDto } from './dto/update-surcharge.dto';
import { Public, ResponseMessage, Serialize } from 'src/decorators/customize';
import { SurchargeResponseDto, SurchargesResponseDto } from './dto/surcharge-response.dto';

@Controller('surcharge')
export class SurchargeController {
  constructor(private readonly surchargeService: SurchargeService) { }

  @Post()
  @ResponseMessage('Surcharge created successfully')
  @Serialize(SurchargeResponseDto)
  @Public()
  create(@Body() createSurchargeDto: CreateSurchargeDto) {
    return this.surchargeService.create(createSurchargeDto);
  }

  @Get()
  @ResponseMessage('Surcharge fetched successfully')
  @Serialize(SurchargesResponseDto)
  findAll(@Query() qs: any) {
    return this.surchargeService.findAll(qs);
  }

  @Get(':id')
  @ResponseMessage('Surcharge fetched successfully')
  @Serialize(SurchargeResponseDto)
  findOne(@Param('id') id: string) {
    return this.surchargeService.findOne(id);
  }

  @Patch(':id')
  @Serialize(SurchargeResponseDto)
  @ResponseMessage('Surcharge updated successfully')
  update(@Param('id') id: string, @Body() updateSurchargeDto: UpdateSurchargeDto) {
    return this.surchargeService.update(id, updateSurchargeDto);
  }

  @Delete(':id')
  @Serialize(SurchargeResponseDto)
  @ResponseMessage('Surcharge deleted successfully')
  remove(@Param('id') id: string) {
    return this.surchargeService.remove(id);
  }
}
