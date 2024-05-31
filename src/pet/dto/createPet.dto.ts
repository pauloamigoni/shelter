export interface CreatePetDto {
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
}
