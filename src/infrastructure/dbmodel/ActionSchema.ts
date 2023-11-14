import * as mongoose from 'mongoose';

export const ActionSchema = new mongoose.Schema({
    external_id: String,
    name: String,
    bpm: String
});
