// src/address/address.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import IPhotosPetRepository from './interfaces/photoPetsRepository.interface';
import { PhotosEntity } from './interfaces/photoPets.entity';

@Injectable()
export class PhotoPetRepository implements IPhotosPetRepository {
    constructor(
        @InjectRepository(PhotosEntity)    
        private readonly photosRepository: Repository<PhotosEntity>,
    ) { }

    async createPhotoPets(photoPets: Partial<PhotosEntity>): Promise<PhotosEntity> {
        return this.photosRepository.save(photoPets);
    }

    async getPhotoPetsById(id: number): Promise<PhotosEntity | null> {
        return this.photosRepository.findOne({ where: { id } });
    }

    async getAllPhotoPets(): Promise<PhotosEntity[]> {
        return this.photosRepository.find();
    }
}
