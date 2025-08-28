import { RateType, Sin } from '@forgive-monorepo/shared/types';
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

  async findById(id: number): Promise<Sin> {
    const sin = await this.sinRepository.findOne({
      where: { id },
      select: {
        id: true,
        message: true,
        heaven: true,
        hell: true,
      },
    });
    if (!sin) throw new Error('Sin not found');
    return sin;
  }

  async create(createDto: Sin): Promise<Sin> {
    const sin = this.sinRepository.create(createDto);
    return await this.sinRepository.save(sin);
  }

  async findByPage(page?: { page: number }): Promise<Sin[]> {
    const pageNumber = page?.page ? Number(page.page) : 0;

    return await this.sinRepository.find({
      skip: pageNumber * 3,
      take: 3,
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async rate(id: number, type: RateType): Promise<Sin> {
    const sin = await this.findById(id);

    if (type === 'heaven') {
      sin.heaven += 1;
    } else {
      sin.hell += 1;
    }

    return await this.sinRepository.save(sin);
  }
}
