class PhotosDto {
    url: string;
}  


export default class GetPetByIdUseCaseOutput {
    id: number;
    name: string;
    age: number;
    type: string;
    breed: string;
    gender: string;
    weight: number;
    color: string;
    description: string;
    vaccinated: boolean;
    adopted: boolean;
    neutered: boolean;
    entry_date: Date;
    status: string;
    user: number;
    photos: PhotosDto[];
    created_at: Date;
    updated_at: Date;

    constructor(data: Partial<GetPetByIdUseCaseOutput>) {
        Object.assign(this, data);
    }
}

