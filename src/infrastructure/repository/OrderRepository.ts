import { Model, Types } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IOrder } from '../../domain/model/IOrder';
import { IOrderRepository } from '../../domain/repository/IOrderRepository';
import { IOrderDocument } from '../dbmodel/IOrderDocument';
import { ORDER_MODEL } from '../constants';

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(
        @Inject(ORDER_MODEL)
        private orderModel: Model<IOrderDocument>,
    ) {}

    async insert(orderData: IOrder): Promise<IOrderDocument> {
        return this.orderModel.create({
            ...orderData, 
            processing_rule: new Types.ObjectId(orderData.processing_rule)
        });
    }

}
