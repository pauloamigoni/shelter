import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './interfaces/pet.entity';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import PetTokens from './pet.tokens';
import { PetRepository } from './pet.repository';
import GetPetByIdUseCase from './usecases/getPetById.usecase';
import { PhotosPetModule } from 'src/photos_pet/photos_pet.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PetEntity]),
        PhotosPetModule
    ],
    controllers: [PetController],
    providers: [
        PetService,
        {
            provide: PetTokens.getPetByIdUseCase,
            useClass: GetPetByIdUseCase,
        },
        {
            provide: PetTokens.petRepository,
            useClass: PetRepository,
        },
    ],
    exports: [TypeOrmModule],
})
export class PetModule { }
