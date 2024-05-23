import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { AddressService } from '../address/address.service'; // Importe o AddressService
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly addressService: AddressService, // Injeção do AddressService
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        const newUser = this.userRepository.create({
            ...createUserDto,
            password: passwordHashed,
        });

        const savedUser = await this.userRepository.save(newUser);

        // Cria os endereços associados
        for (const addressDto of createUserDto.addresses) {
            await this.addressService.createAddress({ ...addressDto, userId: savedUser.id });
        }

        return this.getUserById(savedUser.id);
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find({ relations: ['addresses'] });
    }

    async getUserById(id: number): Promise<UserEntity | null> {
        return this.userRepository.findOne({
            where: { id },
            relations: ['addresses'],
        });
    }
}
