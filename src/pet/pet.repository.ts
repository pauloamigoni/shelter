import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetEntity } from './interfaces/pet.entity';
import IPetRepository from './interfaces/petRepository.interface.';

@Injectable()
export class PetRepository implements IPetRepository {
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
