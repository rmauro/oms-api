import { Module } from '@nestjs/common';
import { providers } from './dbmodel.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...providers],
  exports: [...providers],
})
export class DBModelModule {}
