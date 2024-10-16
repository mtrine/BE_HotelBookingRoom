import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { VnpayPaymentService } from './vnpay-payment.service';
import { Public, ResponseMessage, Serialize } from 'src/decorators/customize';
import { PaymentResponseDto } from '../payment/dto/payment-response.dto';

@Controller('vnpay')
export class VnpayPaymentController {
  constructor(private readonly vnpayPaymentService: VnpayPaymentService) {}

  @Post()
  @ResponseMessage('Create vnpay payment url success')
  async buildPaymentUrl(@Req() req) {
    return this.vnpayPaymentService.buildPaymentUrl(req);
  }

  @Get('return')
  @ResponseMessage('Create vnpay payment success')
  @Serialize(PaymentResponseDto)
  @Public()
  async handleVnpayReturn(@Req() req:any,@Res() res:any) {
    try{
      await this.vnpayPaymentService.handleVnpayReturn(req);
      return res.redirect('http://localhost:3000/payment/success');
    }
    catch(error){
      console.log(error);
      return res.redirect('http://localhost:3000/payment/fail');
    }
  }
}
