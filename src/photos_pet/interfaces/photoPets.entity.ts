import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PetEntity } from 'src/pet/interfaces/pet.entity';

@Entity({ name: 'photos_pets' })
export class PhotosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => PetEntity, pet => pet.photos, { nullable: false })
    pet: PetEntity;
}
