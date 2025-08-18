import { Controller, Body, Post, UsePipes, Get, Query } from '@nestjs/common';
import { SinService } from './sin.service';
import { Sin } from '@forgive-monorepo/shared/types';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import {
  createSinSchema,
  getSinSchema,
} from '@forgive-monorepo/shared/validation';

@Controller('sin')
export class SinController {
  constructor(private readonly sinService: SinService) {}

  @Post('/create')
  @UsePipes(new ZodValidationPipe(createSinSchema))
  create(@Body() sin: Sin): Promise<Sin> {
    return this.sinService.create(sin);
  }

  @Get()
  @UsePipes(new ZodValidationPipe(getSinSchema))
  findAll(@Query() page: { page: number }): Promise<Sin[]> {
    return this.sinService.find(page);
  }
}
