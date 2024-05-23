import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './interfaces/address.entity';
import { AddressService } from './address.service';
import { UserEntity } from '../user/interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity, UserEntity])],
  providers: [AddressService],
  exports: [AddressService],  // Exporta o AddressService
})
export class AddressModule { }
