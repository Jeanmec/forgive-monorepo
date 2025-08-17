import { Controller, Body, Post, UsePipes } from '@nestjs/common';
import { SinService } from './sin.service';
import { Sin } from '@forgive-monorepo/shared/types';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { createSinSchema } from '@forgive-monorepo/shared/validation';

@Controller('sin')
export class SinController {
  constructor(private sinService: SinService) {}

  @Post('/create')
  @UsePipes(new ZodValidationPipe(createSinSchema))
  create(@Body() sin: Sin): Promise<Sin> {
    return this.sinService.create(sin);
  }
}
