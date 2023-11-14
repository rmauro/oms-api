import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigEnvModule } from '../config/config.module';

@Module({
  imports: [ConfigEnvModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
