import { Controller, Get } from '@nestjs/common';
import { NestedService } from './nested.service';

@Controller()
export class NestedController {
  constructor(private readonly nestedService: NestedService) {}

  @Get()
  getHello(): string {
    return this.nestedService.getHello();
  }
}
