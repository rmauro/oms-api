import { Document } from 'mongoose';

export interface IProcessingRuleDocument extends Document {
    readonly actions: string[];
    readonly name: string;
    readonly description: string;
}
