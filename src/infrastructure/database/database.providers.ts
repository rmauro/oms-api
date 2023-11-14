import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../constants';
import { Config } from '../config/Config';

export const databaseProviders = [
  {
    inject: [ Config ],
    provide: DATABASE_CONNECTION,
    useFactory: (config: Config): Promise<typeof mongoose> =>
      mongoose.connect(config.getDatabaseURL()),
  },
];
