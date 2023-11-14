import { Injectable } from '@nestjs/common';

import { IProcessingRule } from '../domain/model/IProcessingRule';
import { IProcessingRuleRepository } from '../domain/repository/IProcessingRuleRepository';

@Injectable()
export class AddProcessingRuleUsecase {
    constructor(private processingRuleRepository: IProcessingRuleRepository) {}

    async execute(actions: string[], name: string, description: string): Promise<void> {
        let processingRule: IProcessingRule = {actions, name, description};
        this.processingRuleRepository.insert(processingRule);
    }
}
