import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { NestedModule } from './nested/nested.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.registerQueueAsync({
      imports: [ConfigModule],
      name: 'dummy', // Just created to configure queue connection
      useFactory: async (_configService: ConfigService) => {
        // Assume we use config service to read from .env file
        const host = 'some-host.com';
        const port = 1337;
        const db = 2;
        return {
          redis: { host, port, db },
        };
      },
      inject: [ConfigService],
    }),
    NestedModule,
  ],
})
export class AppModule {}
