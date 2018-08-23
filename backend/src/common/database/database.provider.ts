import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://192.168.1.103/novum-test'),
  },
];