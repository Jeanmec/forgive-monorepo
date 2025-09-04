import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SinEntity } from '../entities/sin.entity';
import { Sin, RateType } from '@forgive-monorepo/shared/types';

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

  async create(message: string): Promise<Sin> {
    const sinData: Sin = {
      message,
      heaven: 0,
      hell: 0,
    };

    const sin = this.sinRepository.create(sinData);
    return await this.sinRepository.save(sin);
  }

  async find(skip: number, take: number): Promise<Sin[]> {
    const takeLimit = take ? Number(take) : 10;

    return await this.sinRepository.find({
      skip,
      take: takeLimit,
      order: { createdAt: 'DESC' },
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
