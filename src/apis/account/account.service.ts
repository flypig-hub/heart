import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private accountRepository: Repository<Account>,
    ){}

    async findAll(): Promise<Account[]>{
        return this.accountRepository.find();
    }
}
