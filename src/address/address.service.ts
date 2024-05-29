// src/address/address.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressEntity } from './interfaces/address.entity';
import { UserEntity } from '../user/interfaces/user.entity';
import IAddressRepository from './interfaces/addressRepository.interface';
import AddressTokens from './address.tokens';

@Injectable()
export class AddressService {
    constructor(
        @Inject(AddressTokens.addressRepository)
        private readonly addressRepository: IAddressRepository,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async createAddress(addressDto: CreateAddressDto): Promise<AddressEntity> {
        const user = await this.userRepository.findOne({ where: { id: addressDto.userId } });
        if (!user) {
            throw new Error('User not found');
        }

        const address: Partial<AddressEntity> = {
            street: addressDto.street,
            city: addressDto.city,
            state: addressDto.state,
            country: addressDto.country,
            postalCode: addressDto.postalCode,
            user: user,
            createdBy: user, // Associa o UserEntity ao campo createdBy
        };
        return this.addressRepository.createAddress(address);
    }
}
