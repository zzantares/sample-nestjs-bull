import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { NestedController } from './nested.controller';
import { NestedService } from './nested.service';
import { NestedProcessor } from './nested.processor';

@Module({
  imports: [BullModule.registerQueue({ name: 'nested' })],
  controllers: [NestedController],
  providers: [NestedService, NestedProcessor],
})
export class NestedModule {}
