import { Injectable } from '@nestjs/common';
import { PetEntity } from './interfaces/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetDto } from './dto/createPet.dto';
import { PhotosPetService } from 'src/photos_pet/photos_pet.service';

@Injectable()
export class PetService {
    constructor(
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>,
        private readonly photoService: PhotosPetService
    ) { }

    async getPetById(id: number): Promise<PetEntity | null> {
        return this.petRepository.findOne({
            where: { id },
            relations: ['photos'], // Certifique-se de que a relação está correta
        });
    }

    async createPet(createPetDto: CreatePetDto): Promise<PetEntity> {
        const newPet = this.petRepository.create({
            ...createPetDto,
            photos: undefined // Remova as fotos para evitar problemas de tipagem
        } as Partial<PetEntity>);

        const savedPet = await this.petRepository.save(newPet);

        for (const photoDTO of createPetDto.photos) {
            await this.photoService.createPhotoPets({ ...photoDTO, petId: savedPet.id });
        }

        return this.getPetById(savedPet.id);
    }

    async getAllPets(): Promise<PetEntity[]> {
        return this.petRepository.find({ relations: ['photos'] }); // Adicione a relação de fotos
    }
}
