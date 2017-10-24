import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images_download')
export class ImagesToDownload {
  @PrimaryGeneratedColumn() id: number;

  @Column('int', { length: 10 })
  media_id: number;

  @Column('string', { length: 11 })
  type: string;

  @Column('string', { length: 255 })
  path: string;
}
