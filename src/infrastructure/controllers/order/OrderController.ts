import {
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { AddOrderUsecase } from '../../../usecases/AddOrderUsecase';
import { AddOrderDto } from './OrderDTO';

@Controller('Order')
@ApiTags('Order')
export class OrderController {
  constructor(
    @Inject(UsecasesProxyModule.ADD_ORDER_USECASE_PROXY)
    private readonly addOrderUsecaseProxy: UseCaseProxy<AddOrderUsecase>,
  ) {}

  @Post('/')
  @ApiBody({
    type: AddOrderDto,
    description: 'JSON payload to create new Order',
  })
  async addOrder(@Body() addOrderDto: AddOrderDto) {
    const { processing_rule, type, description, customer_id, amount } =
      addOrderDto;
    return this.addOrderUsecaseProxy
      .getInstance()
      .execute(processing_rule, type, description, customer_id, amount);
  }
}
