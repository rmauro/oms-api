import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { ProcessingRuleController } from './processing-rule/ProcessingRuleController';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [ProcessingRuleController],
})
export class ControllersModule {}
