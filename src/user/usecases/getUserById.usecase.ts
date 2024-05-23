import { IUseCase } from 'src/domain/iusecase.interface';
import { Inject } from '@nestjs/common';
import IUserRepository from '../interfaces/userRepository.interface';
import UserTokens from '../user.tokens';
import GetUserByIdUseCaseInput from './dtos/getUserByIdUseCaseInput';
import GetUserByIdUseCaseOutput from './dtos/getUserByIdUseCaseOutput';
import { UserEntity } from '../interfaces/user.entity';

export default class GetUserByIdUseCase implements IUseCase<GetUserByIdUseCaseInput, GetUserByIdUseCaseOutput> {

    constructor(
        @Inject(UserTokens.userRepository)
        private readonly userRepository: IUserRepository,
    ) { }

    async run(input: GetUserByIdUseCaseInput): Promise<GetUserByIdUseCaseOutput> {
        const user = await this.getUserById(input.id);
        if (user === null) {
            throw new Error("User not found");
        }
        return new GetUserByIdUseCaseOutput({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            whatsApp: user.whatsApp,
            cpf: user.cpf,
            type: user.type,
            username: user.username,
            avatar: user.avatar,
            description: user.description,
            addresses: (user.addresses || []).map(address => ({
                street: address.street,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode,
            
            })),
           
        }); 
           
    }

    private async getUserById(id: number): Promise<UserEntity | null> {
        try {
            return await this.userRepository.getUserById(id);
        } catch (error) {
            return null;
        }
    }
}
