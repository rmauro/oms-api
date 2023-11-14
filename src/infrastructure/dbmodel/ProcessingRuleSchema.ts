import * as mongoose from 'mongoose';

export const ProcessingRuleSchema = new mongoose.Schema({
    actions: [String],
    name: String,
    description: String
});
