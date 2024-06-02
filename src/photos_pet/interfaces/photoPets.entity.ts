import { PetEntity } from 'src/pet/interfaces/pet.entity';
import { UserEntity } from 'src/user/interfaces/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('photos_pets')
export class PhotosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    petId: number;

    @ManyToOne(() => PetEntity, pet => pet.photos, { nullable: true })
    @JoinColumn({ name: 'petId' })
    photoPets: PetEntity;

    @ManyToOne(() => UserEntity, user => user.createdAddresses)
    createdBy: UserEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
