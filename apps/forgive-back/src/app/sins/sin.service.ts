import { Sin } from '@forgive-monorepo/shared/types';
import { Injectable } from '@nestjs/common';
import { SinEntity } from '../entities/sin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SinService {
  constructor(
    @InjectRepository(SinEntity)
    private readonly sinRepository: Repository<SinEntity>
  ) {}
  async create(createDto: Sin): Promise<Sin> {
    const sin = this.sinRepository.create(createDto);
    return await this.sinRepository.save(sin);
  }
}
