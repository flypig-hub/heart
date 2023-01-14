import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AccountModule } from 'src/apis/account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.c0zhfpvned3q.ap-northeast-2.rds.amazonaws.com',
      port: 5432,
      username: 'posrgres',
      password: '12345678a',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      // context: ({ req }) => ({ req }),
    }),
    AccountModule,
  ],
})
export class AppModule {}