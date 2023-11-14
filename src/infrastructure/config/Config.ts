import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from '../../domain/config/IDatabaseConfig';

@Injectable()
export class Config {
    constructor(private configService: ConfigService){}

    getDatabaseURL(): string {
        return this.configService.get<string>('DATABASE_URL');
    }
}
