import { Document } from 'mongoose';

export interface IActionDocument extends Document {
    readonly exernal_id: string;
    readonly name: string;
    readonly bpm: string;
}
