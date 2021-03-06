import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainService } from './blockchain.service';
import { EnteredPool } from './entities/entered-pool.entity';
import { Pool } from './entities/pool.entity';
import { BlockchainController } from './blockchain.controller';
import { TokenList } from './entities/token-list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pool, EnteredPool, TokenList]),
    ConfigModule,
  ],
  providers: [BlockchainService],
  exports: [BlockchainService],
  controllers: [BlockchainController],
})
export class BlockchainModule {}
