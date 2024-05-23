import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import IUserRepository from './interfaces/userRepository.interface';
import { UserEntity } from './interfaces/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async getUserById(id: number): Promise<UserEntity | null> {
        return this.userRepository.findOne({
            where: { id },
            relations: ['addresses'],
        });
    }

    async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find({ relations: ['addresses'] });
    }
}
