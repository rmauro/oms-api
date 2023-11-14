import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  processing_rule: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tasks: [
    {
      action: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      external_task_id: {
        type: String,
        required: true,
      },
      data: {
        type: Schema.Types.Mixed,
      },
      started_at: {
        type: Date,
      },
      finished_at: {
        type: Date,
      },
    },
  ],
  description: {
    type: String,
  },
  customer_id: {
    type: String,
  },
  amount: {
    type: Schema.Types.Decimal128,
  },
});
