import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_setings')
export class SystemInfo {
  @PrimaryGeneratedColumn() id: number;

  @Column('string', { length: 11 })
  key: string;

  @Column('string', { length: 255 })
  value: string;
}
