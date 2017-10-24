import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_setings')
export class SystemInfo {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar', { length: 11 })
  key: string;

  @Column('varchar', { length: 255 })
  value: string;
}
