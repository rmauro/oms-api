import { Module } from '@nestjs/common';
import { ProcessingRuleRepository } from './ProcessingRuleRepository';
import { OrderRepository } from './OrderRepository';
import { DBModelModule } from '../dbmodel/dbmodel.module';

@Module({
  imports: [DBModelModule],
  providers: [ProcessingRuleRepository, OrderRepository],
  exports: [ProcessingRuleRepository, OrderRepository],
})
export class RepositoryModule {}
