import { IsString, IsNotEmpty, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePhotosPetDto {
    @IsString()
    url: string;
}

export class CreatePetDto {
    @IsString({ message: 'Nome deve ser uma string' })
    @IsNotEmpty({ message: 'Nome deve ser informado' })
    @ApiProperty({ description: 'Nome do Pet' })
    name: string;
    age?: number;
    type?: string;
    breed?: string;
    gender?: string;
    weight?: number;
    color?: string;
    description?: string;
    vaccinated?: boolean;
    adopted?: boolean;
    neutered?: boolean;
    entry_date?: Date;
    status?: string;
    img?: string;
    photos: CreatePhotosPetDto[];
}
