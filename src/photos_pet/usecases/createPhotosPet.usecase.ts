import { IUseCase } from 'src/domain/iusecase.interface';
import { Inject } from '@nestjs/common';
import { PhotosEntity } from '../interfaces/photoPets.entity';
import PhotosPetTokens from '../photos_pet.tokens';
import { CreatePhotoPetsDto } from '../dto/createPhotoPets.dto';
import IPhotosPetRepository  from '../interfaces/photoPetsRepository.interface';

export default class CreatePhotosPetUseCase implements IUseCase<CreatePhotoPetsDto, PhotosEntity> {

    constructor(
        @Inject(PhotosPetTokens.photoPetRepository)
        private readonly photoPetRepository: IPhotosPetRepository,
    ) { }

    async run(input: CreatePhotoPetsDto): Promise<PhotosEntity> {
        return this.photoPetRepository.createPhotoPets(input);
    }
}
