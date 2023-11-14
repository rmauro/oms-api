import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddProcessingRuleDto {
  @ApiProperty({ required: true })
  readonly actions: string[];

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly description: string;
}
