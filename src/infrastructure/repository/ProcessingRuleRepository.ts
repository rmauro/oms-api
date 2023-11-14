import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IProcessingRule } from '../../domain/model/IProcessingRule';
import { IProcessingRuleRepository } from '../../domain/repository/IProcessingRuleRepository';
import { IProcessingRuleDocument } from '../dbmodel/IProcessingRuleDocument';
import { PROCESSING_RULE_MODEL } from '../constants';

@Injectable()
export class ProcessingRuleRepository implements IProcessingRuleRepository {
    constructor(
        @Inject(PROCESSING_RULE_MODEL)
        private processingRuleModel: Model<IProcessingRuleDocument>,
    ) {}

    async insert(processingRule: IProcessingRule): Promise<void> {
        this.processingRuleModel.create(processingRule);
    }

}
