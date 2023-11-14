import { IOrder } from '../model/IOrder';

export interface IOrderRepository {
  insert(order: IOrder): Promise<any>;
}
