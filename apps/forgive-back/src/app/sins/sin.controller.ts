import { Controller, Body, Post, UsePipes, Get, Query } from '@nestjs/common';
import { SinService } from './sin.service';
import { SinGateway } from './sin.gateway';
import { Sin } from '@forgive-monorepo/shared/types';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import {
  createSinSchema,
  getSinSchema,
} from '@forgive-monorepo/shared/validation';
import z from 'zod';

@Controller('sin')
export class SinController {
  constructor(
    private readonly sinService: SinService,
    private readonly sinGateway: SinGateway
  ) {}

  @Post('/create')
  @UsePipes(new ZodValidationPipe(createSinSchema))
  async create(@Body() body: { message: string }): Promise<Sin> {
    const savedSin = await this.sinService.create(body.message);
    this.sinGateway.emitNewSin(savedSin);
    return savedSin;
  }

  @Get()
  @UsePipes(new ZodValidationPipe(getSinSchema))
  async find(@Query() query: z.infer<typeof getSinSchema>): Promise<Sin[]> {
    const { take, skip } = query;
    return this.sinService.find(skip, take);
  }
}
