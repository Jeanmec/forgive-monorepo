import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('sins')
export class SinEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  message: string;

  @Column({ type: 'integer', default: 0 })
  hell: number;

  @Column({ type: 'integer', default: 0 })
  heaven: number;

  @CreateDateColumn()
  createdAt: Date;
}
