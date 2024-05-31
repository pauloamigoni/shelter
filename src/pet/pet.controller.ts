import { BadRequestException, Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import IPetCase from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';
import { PetService } from './pet.service';
import GetPetByIdUseCaseOutput from './usecases/dtos/getPetByIdUseCaseOutput';
import GetPetByIdUseCaseInput from './usecases/dtos/getPetByIdUseCaseInput';
import { CreatePetDto } from './dto/createPet.dto';
import { PetEntity } from './interfaces/pet.entity';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IPetCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;
    constructor(
        private readonly petService: PetService) { }

    @Post()
    async createPet(@Body() createPetDto: CreatePetDto): Promise<PetEntity> {
        return this.petService.createPet(createPetDto);
    }

    @Get(':id')
    async getPetById(@Param('id') id: number): Promise<GetPetByIdUseCaseOutput> {
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({ id });
            return await this.getPetByIdUseCase.run(useCaseInput);
        } catch (error) {
            if (error.message) {
                try {
                    const parsedMessage = JSON.parse(error.message);
                    throw new BadRequestException(parsedMessage);
                } catch (parseError) {
                    throw new BadRequestException(error.message);
                }
            } else {
                throw new BadRequestException('An unexpected error occurred');
            }
        }
    }

    @Get()
    async getAllPets(): Promise<PetEntity[]> {
        return this.petService.getAllPets();
    }
}
