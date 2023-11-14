import { Injectable } from '@nestjs/common';

import { IOrder } from '../domain/model/IOrder';
import { IOrderRepository } from '../domain/repository/IOrderRepository';

@Injectable()
export class AddOrderUsecase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(
    processing_rule: string,
    type: string,
    description: string,
    customer_id: string,
    amount: number,
  ): Promise<void> {
    const orderData: IOrder = {
      processing_rule,
      type,
      description,
      customer_id,
      amount,
    };
    this.orderRepository.insert(orderData);
  }
}
