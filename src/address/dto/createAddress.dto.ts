export interface CreateAddressDto {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    userId: number; // Adicione este campo
}
