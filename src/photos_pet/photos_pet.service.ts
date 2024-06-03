import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoPetsDto } from './dto/createPhotoPets.dto';
import { PhotosEntity } from './interfaces/photoPets.entity';
import PhotosPetTokens from './photos_pet.tokens';
import { PetEntity } from 'src/pet/interfaces/pet.entity';
import IPhotosPetRepository from './interfaces/photoPetsRepository.interface';

@Injectable()
export class PhotosPetService {
    constructor(
        @Inject(PhotosPetTokens.photoPetRepository)
        private readonly photosPetRepository: IPhotosPetRepository,
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>,
    ) { }

    async createPhotoPets(photoPetsDto: CreatePhotoPetsDto): Promise<PhotosEntity> {
        const pet = await this.petRepository.findOne({ where: { id: photoPetsDto.petId } });
        if (!pet) {
            throw new Error('Pet not found');
        }

        const photo: Partial<PhotosEntity> = {
            url: photoPetsDto.url,
            pet: pet,
        };

        return this.photosPetRepository.createPhotoPets(photo);
    }

    async getAllPhotoPets(): Promise<PhotosEntity[]> {
        return this.photosPetRepository.getAllPhotoPets();
    }
}
