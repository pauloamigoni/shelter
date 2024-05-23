import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressEntity } from './interfaces/address.entity';
import { UserEntity } from '../user/interfaces/user.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private addressRepository: Repository<AddressEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    async createAddress(addressDto: CreateAddressDto): Promise<AddressEntity> {
        const user = await this.userRepository.findOne({
            where: { id: addressDto.userId }
        });
        if (!user) {
            throw new Error('User not found');  // Ou algum outro tipo de tratamento de erro
        }

        const address = this.addressRepository.create({
            ...addressDto,
            userId: user,  // Associação explícita do usuário ao endereço
        });

        return this.addressRepository.save(address);
    }
}
