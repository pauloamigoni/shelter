// src/address/usecases/createAddress.usecase.ts
import { IUseCase } from 'src/domain/iusecase.interface';
import { Inject } from '@nestjs/common';
import { PhotosEntity } from 'src/photos_pet/interfaces/photoPets.entity';
import PhotosPetTokens from 'src/photos_pet/photos_pet.tokens';
import { CreatePhotoPetsDto } from 'src/photos_pet/dto/createPhotoPets.dto';
import IPhotosPetRepository  from 'src/photos_pet/interfaces/photoPetsRepository.interface';


export default class CreatePhotosPetUseCase implements IUseCase<CreatePhotoPetsDto, PhotosEntity> {

    constructor(
        @Inject(PhotosPetTokens.photoPetRepository)
        private readonly photosPetRepository: IPhotosPetRepository,
    ) { }

    async run(input: CreatePhotoPetsDto): Promise<PhotosEntity> {
        return this.photosPetRepository.createPhotoPets(input);
    }
}
