import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddOrderDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly processing_rule: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @ApiProperty({ required: false })
  @IsString()
  readonly description: string;

  @ApiProperty({ required: false })
  @IsString()
  readonly customer_id: string;

  @ApiProperty({ required: false })
  @IsNumber()
  readonly amount: number;
}
