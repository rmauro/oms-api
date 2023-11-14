import { IProcessingRule } from '../model/IProcessingRule';

export interface IProcessingRuleRepository {
    insert(processingRule: IProcessingRule): Promise<void>
}
