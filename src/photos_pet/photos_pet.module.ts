import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './interfaces/photoPets.entity';
import { PetEntity } from 'src/pet/interfaces/pet.entity';
import { PhotosPetService } from './photos_pet.service';
import { PhotoPetRepository } from './photos_pet.repository';
import PhotosPetTokens from './photos_pet.tokens';
import { PhotosPetController } from './photos_pet.controller';
import CreatePhotosPetUseCase from './usecases/dtos/createPhotosPet.usecase';

@Module({
    imports: [TypeOrmModule.forFeature([PhotosEntity, PetEntity])],
    providers: [
        PhotosPetService,
        PhotoPetRepository,
        {
            provide: PhotosPetTokens.photoPetRepository,
            useClass: PhotoPetRepository,
        },
        {
            provide: PhotosPetTokens.createPhotoPetUseCase,
            useClass: CreatePhotosPetUseCase,
        }
    ],
    controllers: [PhotosPetController],
    exports: [PhotosPetService],
})
export class PhotosPetModule { }
