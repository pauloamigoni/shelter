import { Injectable } from '@nestjs/common';
import { PetEntity } from './interfaces/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetDto } from './dto/createPet.dto';
import { PetPhotoService } from '../petPhoto/petPhoto.service';
import { PhotosPetService } from 'src/photos_pet/photos_pet.service';


@Injectable()
export class PetService {

    constructor(
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>,
        private readonly photoService: PhotosPetService, // Injeção do AddressService
    ) { }

    async getPetById(id: number): Promise<PetEntity | null> {
        return this.petRepository.findOne({ where: { id } });
    }


    async createPet(createPetDto: CreatePetDto): Promise<PetEntity> {
   
        const newPet = this.petRepository.create({...createPetDto});

        const savedPet = await this.petRepository.save(newPet);

        // Cria os endereços associados
        for (const photoDTO of createPetDto.photos) {
            await this.photoService.createPhoto({ ...photoDTO, petId: savedPet.id });
           //await this.petService.createPet({ ...petDTO, petId: savedPet.id });
        }

        return this.getPetById(savedPet.id);
    }

    async getAllPets(): Promise<PetEntity[]> {
        return this.petRepository.find();
    }
}
