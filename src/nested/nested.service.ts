import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class NestedService {
  constructor(@InjectQueue('nested') private readonly nestedQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }
}
