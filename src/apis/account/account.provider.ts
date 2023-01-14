import { DataSource } from 'typeorm';
import { Account } from './account.entity';

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Account),
    inject: ['DATA_SOURCE'],
  },
];

//https://docs.nestjs.com/recipes/sql-typeorm 

