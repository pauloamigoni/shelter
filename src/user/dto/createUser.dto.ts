export interface CreateAddressDto {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

export interface CreateUserDto{
    name: string;
    email: string;
    phone: string;
    whatsApp?: string;
    cpf?: string;
    password?: string;
    type?: number;
    username?: string;
    avatar?: string;
    description?: string;
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
    createdAt?: string;
    updatedAt?: string;
    addresses: CreateAddressDto[];
}