import { Inject } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import GetPetByIdUseCaseInput from "./dtos/getPetByIdUseCaseInput";
import GetPetByIdUseCaseOutput from "./dtos/getPetByIdUseCaseOutput";
import  IPetCase  from "src/domain/iusecase.interface";
import IPetRepository from "../interfaces/petRepository.interface.";


export default class GetPetByIdUseCase implements IPetCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,
    ) { }

    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
        const pet = await this.petRepository.getPetById(input.id);
        if (pet === null) {
            throw new Error("Pet not found");
        }
        return new GetPetByIdUseCaseOutput({
            id: pet.id,
            name: pet.name,
            age: pet.age,
            breed: pet.breed,
            type: pet.type,
            gender: pet.gender,
            weight: pet.weight,
            color: pet.color,
            vaccinated: pet.vaccinated,
            adopted: pet.adopted,
            neutered: pet.neutered,
            entry_date: pet.entry_date,
            status: pet.status,
            description: pet.description,
        });
    }
}
