import { AddressEntity } from './address.entity';

export default interface IAddressRepository {
    createAddress(address: Partial<AddressEntity>): Promise<AddressEntity>;
    getAddressById(id: number): Promise<AddressEntity | null>;
    getAllAddresses(): Promise<AddressEntity[]>;
}
