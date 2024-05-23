class AddressDto {
    street: string;
    city: string;
    state: string;
    postalCode: string;
}

export default class GetUserByIdUseCaseOutput {
    id: number;
    name: string;
    email: string;
    phone: string;
    whatsApp?: string;
    cpf?: string;
    type?: number;
    username?: string;
    avatar?: string;
    description?: string;
    addresses: AddressDto[];
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    birthplace?: string;
    gender?: string;
    language?: string;
    profession?: string;
    company?: string;
    website?: string;
    relationship?: string;
    birthdate?: string;
    status?: number;
    active?: boolean;


    constructor(data: Partial<GetUserByIdUseCaseOutput>) {
        Object.assign(this, data);
    }
}
