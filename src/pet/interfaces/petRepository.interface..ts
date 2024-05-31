import { PetEntity } from './pet.entity';

export default interface IPetRepository {
    getPetById(id: number): Promise<PetEntity | null>;
    createPet(pet: Partial<PetEntity>): Promise<PetEntity>;
    getAllPets(): Promise<PetEntity[]>;
}