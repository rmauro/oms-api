import { Module } from '@nestjs/common';
import { ProcessingRuleRepository } from './ProcessingRuleRepository';
import { DBModelModule } from '../dbmodel/dbmodel.module';

@Module({
  imports: [DBModelModule],
  providers: [ProcessingRuleRepository],
  exports: [ProcessingRuleRepository],
})
export class RepositoryModule {}
