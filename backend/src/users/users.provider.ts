import { Connection } from 'mongoose';
import { UserSchema } from './schema/user.schema';

export const userProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  },
];