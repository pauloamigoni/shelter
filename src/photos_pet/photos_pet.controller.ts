import { Body, Controller, Post } from '@nestjs/common';
import { PhotosEntity } from './interfaces/photoPets.entity';
import { CreatePhotoPetsDto } from './dto/createPhotoPets.dto';
import { PhotosPetService } from './photos_pet.service';

@Controller('photos-pet')
export class PhotosPetController { 

    constructor(private readonly photoPetsService: PhotosPetService) { }
   
        @Post()
    async CreatePhotoPetsDto(@Body() CreatePhotoPetsDto: CreatePhotoPetsDto): Promise<PhotosEntity> {
        return this.photoPetsService.createPhotoPets(CreatePhotoPetsDto);
    }

}
