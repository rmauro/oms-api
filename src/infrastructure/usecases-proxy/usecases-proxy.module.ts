import { DynamicModule, Module } from '@nestjs/common';

import { AddProcessingRuleUsecase } from '../../usecases/AddProcessingRuleUsecase';
import { AddOrderUsecase } from '../../usecases/AddOrderUsecase';
import { ProcessingRuleRepository } from '../repository/ProcessingRuleRepository'
import { OrderRepository } from '../repository/OrderRepository'
import { RepositoryModule } from '../repository/repository.module';

import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [RepositoryModule],
})
export class UsecasesProxyModule {

  static ADD_PROCESSING_RULE_USECASE_PROXY = 'addProcessingRuleUsecaseProxy';
  static ADD_ORDER_USECASE_PROXY = 'addOrderUsecaseProxy';

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
        {
          inject: [ OrderRepository ],
          provide: UsecasesProxyModule.ADD_ORDER_USECASE_PROXY,
          useFactory: (
            orderRepository: OrderRepository,
          ) => new UseCaseProxy(new AddOrderUsecase(orderRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.ADD_PROCESSING_RULE_USECASE_PROXY,
        UsecasesProxyModule.ADD_ORDER_USECASE_PROXY,
      ],
    };
  }
}
