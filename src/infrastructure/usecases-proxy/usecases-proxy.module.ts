import { DynamicModule, Module } from '@nestjs/common';

import { AddProcessingRuleUsecase } from '../../usecases/AddProcessingRuleUsecase';
import { ProcessingRuleRepository } from '../repository/ProcessingRuleRepository'
import { RepositoryModule } from '../repository/repository.module';

import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [RepositoryModule],
})
export class UsecasesProxyModule {

  static ADD_PROCESSING_RULE_USECASE_PROXY = 'addProcessingRuleUsecaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [ ProcessingRuleRepository ],
          provide: UsecasesProxyModule.ADD_PROCESSING_RULE_USECASE_PROXY,
          useFactory: (
            processingRuleRepository: ProcessingRuleRepository,
          ) => new UseCaseProxy(new AddProcessingRuleUsecase(processingRuleRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.ADD_PROCESSING_RULE_USECASE_PROXY,
      ],
    };
  }
}
