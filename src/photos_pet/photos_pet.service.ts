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
    [x: string]: any;
    constructor(
        @Inject(PhotosPetTokens.photoPetRepository)
        private readonly photosPetRepository : IPhotosPetRepository,
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>,
    ) { }

    async createPhotoPets(photoPetsDto: CreatePhotoPetsDto): Promise<PhotosEntity> {
        const photo = await this.petRepository.findOne({ where: { id: photoPetsDto.petId } });
        if (!photo) {
            throw new Error('Photos not found');
        }

        const photos: Partial<PhotosEntity> = {
            url: photoPetsDto.url,
            photoPets: photo,
   
        };
        return this.photosPetRepository.createPhotoPets(photos);
    }

    async getAllPhotoPets(): Promise<PhotosEntity[]> {
        return this.photosPetRepository.getAllPhotoPets();
     }
}
