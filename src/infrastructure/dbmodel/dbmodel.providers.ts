import { Connection } from 'mongoose';
import { ActionSchema } from './ActionSchema';
import { OrderSchema } from './OrderSchema';
import { ProcessingRuleSchema } from './ProcessingRuleSchema';
import {
  ACTION_MODEL,
  ORDER_MODEL,
  PROCESSING_RULE_MODEL,
  DATABASE_CONNECTION,
} from '../constants';

export const providers = [
  {
    provide: ACTION_MODEL,
    inject: [DATABASE_CONNECTION],
    useFactory: (connection: Connection) =>
      connection.model('Action', ActionSchema),
  },
  {
    provide: ORDER_MODEL,
    inject: [DATABASE_CONNECTION],
    useFactory: (connection: Connection) =>
      connection.model('Order', OrderSchema),
  },
  {
    provide: PROCESSING_RULE_MODEL,
    inject: [DATABASE_CONNECTION],
    useFactory: (connection: Connection) =>
      connection.model('ProcessingRule', ProcessingRuleSchema),
  },
];
