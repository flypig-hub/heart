import { Module } from '@nestjs/common';
//import { DatabaseModule } from 'src/serverStarter/database/database.module';
// import { accountProviders } from './account.provider';
// import { AccountService } from './account.service';
//import { AccountResolver } from 'src/models/account.resolver';
import { AccountController } from './account.controller';

@Module({
  //  imports: [DatabaseModule],
  //  providers: [
  //  AccountService,
  //   ...accountProviders
  //  ],
  controllers: [AccountController],
})
export class AccountModule {}


//https://docs.nestjs.com/recipes/sql-typeorm