import { Injectable } from '@nestjs/common';
import { PetEntity } from './interfaces/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class PetService {

    constructor(
        @InjectRepository(PetEntity)
        private readonly petRepository: Repository<PetEntity>
    ) { }

    async getPetById(id: number): Promise<PetEntity | null> {
        return this.petRepository.findOne({ where: { id } });
    }

    async createPet(pet: Partial<PetEntity>): Promise<PetEntity> {
        const newPet = this.petRepository.create(pet);
        return this.petRepository.save(newPet);
    }

    async getAllPets(): Promise<PetEntity[]> {
        return this.petRepository.find();
    }
}
