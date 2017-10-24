import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tv_episode')
export class Episode {
  @PrimaryGeneratedColumn() id: number;

  @Column('int', { length: 7 })
  tvdb_id: number;

  @Column('int', { length: 7 })
  serie_tvdb_id: number;

  @Column('int', { length: 11 })
  serie_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('int', { length: 2 })
  season: number;

  @Column('int', { length: 3 })
  episode: number;

  @Column('varchar', { length: 10 })
  first_aired: string;

  @Column('text') overview: string;

  @Column('varchar', { length: 50 })
  image: string;

  @Column('int', { length: 10 })
  lastupdated: number;
}
