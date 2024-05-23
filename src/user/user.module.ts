import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interfaces/user.entity';
import UserTokens from './user.tokens';
import GetUserByIdUseCase from './usecases/getUserById.usecase';
import { UserRepository } from './user.repository';
import { AddressModule } from '../address/address.module';  // Importe o AddressModule

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    AddressModule,  // Certifique-se de importar o AddressModule aqui
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserTokens.getUserByIdUseCase,
      useClass: GetUserByIdUseCase,
    },
    {
      provide: UserTokens.userRepository,
      useClass: UserRepository,
    },
  ],
  exports: [TypeOrmModule],
})
export class UserModule { }
