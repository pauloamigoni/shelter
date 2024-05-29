// src/address/address.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import IAddressRepository from './interfaces/addressRepository.interface';
import { AddressEntity } from './interfaces/address.entity';

@Injectable()
export class AddressRepository implements IAddressRepository {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ) { }

    async createAddress(address: Partial<AddressEntity>): Promise<AddressEntity> {
        return this.addressRepository.save(address);
    }

    async getAddressById(id: number): Promise<AddressEntity | null> {
        return this.addressRepository.findOne({ where: { id } });
    }

    async getAllAddresses(): Promise<AddressEntity[]> {
        return this.addressRepository.find();
    }
}
