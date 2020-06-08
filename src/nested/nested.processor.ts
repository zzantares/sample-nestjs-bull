import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('nested')
export class NestedProcessor {
  @Process()
  async perform(job: Job<unknown>) {
    console.log(job.data);
    return {};
  }
}
