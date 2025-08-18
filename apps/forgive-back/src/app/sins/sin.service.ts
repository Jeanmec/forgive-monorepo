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

  async find(page?: { page: number }): Promise<Sin[]> {
    const pageNumber = page?.page ? Number(page.page) : 1;

    return await this.sinRepository.find({
      skip: (pageNumber - 1) * 3,
      take: 3,
    });
  }
}
