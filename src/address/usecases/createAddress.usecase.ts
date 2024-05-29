// src/address/usecases/createAddress.usecase.ts
import { IUseCase } from 'src/domain/iusecase.interface';
import { Inject } from '@nestjs/common';
import IAddressRepository from '../interfaces/addressRepository.interface';
import AddressTokens from '../address.tokens';
import { CreateAddressDto } from '../dto/createAddress.dto';
import { AddressEntity } from '../interfaces/address.entity';

export default class CreateAddressUseCase implements IUseCase<CreateAddressDto, AddressEntity> {

    constructor(
        @Inject(AddressTokens.addressRepository)
        private readonly addressRepository: IAddressRepository,
    ) { }

    async run(input: CreateAddressDto): Promise<AddressEntity> {
        return this.addressRepository.createAddress(input);
    }
}
