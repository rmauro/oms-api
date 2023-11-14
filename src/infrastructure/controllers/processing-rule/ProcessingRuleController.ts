import {
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { AddProcessingRuleUsecase } from '../../../usecases/AddProcessingRuleUsecase';
import { AddProcessingRuleDto } from './ProcessingRuleDTO';

@Controller('ProcessingRule')
@ApiTags('ProcessingRule')
export class ProcessingRuleController {
  constructor(
    @Inject(UsecasesProxyModule.ADD_PROCESSING_RULE_USECASE_PROXY)
    private readonly addProcessingRuleUsecaseProxy: UseCaseProxy<AddProcessingRuleUsecase>,
  ) {}

  @Post('/')
  @ApiBody({
    type: AddProcessingRuleDto,
    description: 'JSON payload to create new Processing Rule',
  })
  async addProcessingRule(@Body() addProcessingRuleDto: AddProcessingRuleDto) {
    const { actions, name, description } = addProcessingRuleDto;
    return this.addProcessingRuleUsecaseProxy
      .getInstance()
      .execute(actions, name, description);
  }
}
