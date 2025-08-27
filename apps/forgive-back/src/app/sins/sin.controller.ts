import {
  Controller,
  Body,
  Post,
  UsePipes,
  Get,
  Query,
  Param,
} from '@nestjs/common';
import { SinService } from './sin.service';
import { RateType, Sin } from '@forgive-monorepo/shared/types';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import {
  createSinSchema,
  getSinSchema,
  rateSinBodySchema,
  rateSinParamSchema,
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

  @Post('/:id/rate')
  rate(
    @Param(new ZodValidationPipe(rateSinParamSchema)) params: { id: number },
    @Body(new ZodValidationPipe(rateSinBodySchema))
    body: { type: RateType }
  ): Promise<Sin> {
    return this.sinService.rate(params.id, body.type);
  }
}
