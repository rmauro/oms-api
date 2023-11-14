import { Document, Types } from 'mongoose';

interface ITask {
    readonly action: Types.ObjectId;
    readonly status: string;
    readonly external_task_id: string;
    readonly data: any;
    readonly started_at: Date;
    readonly finished_at: Date;
}

export interface IOrderDocument extends Document {
    readonly processing_rule: Types.ObjectId;
    readonly type: string;
    readonly tasks: ITask[];
    readonly description: string;
    readonly customer_id: string;
    readonly amount: Types.Decimal128;
}
