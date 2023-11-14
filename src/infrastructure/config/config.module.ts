import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Config } from './Config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: './.env',
    ignoreEnvFile: process.env.NODE_ENV === 'prod',
      isGlobal: true,
  })],
  providers: [Config],
  exports: [Config],
})
export class ConfigEnvModule {}
