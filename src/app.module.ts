import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { ProcessingRuleController } from './infrastructure/controllers/processing-rule/ProcessingRuleController';
import { RepositoryModule } from './infrastructure/repository/repository.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';

@Module({
  imports: [DatabaseModule, RepositoryModule, UsecasesProxyModule.register(), ControllersModule],
  controllers: [ProcessingRuleController],
  providers: [],
})
export class AppModule {}
