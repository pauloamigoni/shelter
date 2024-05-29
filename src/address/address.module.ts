// src/address/address.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './interfaces/address.entity';
import { AddressService } from './address.service';
import { AddressRepository } from './address.repository';
import AddressTokens from './address.tokens';
import CreateAddressUseCase from './usecases/createAddress.usecase';
import { AddressController } from './address.controller';
import { UserEntity } from '../user/interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity, UserEntity])],
  providers: [
    AddressService,
    AddressRepository,
    {
      provide: AddressTokens.addressRepository,
      useClass: AddressRepository,
    },
    {
      provide: AddressTokens.createAddressUseCase,
      useClass: CreateAddressUseCase,
    }
  ],
  controllers: [AddressController],
  exports: [AddressService],
})
export class AddressModule { }
