import { BadRequestException, Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';
import GetUserByIdUseCaseOutput from './usecases/dtos/getUserByIdUseCaseOutput';
import UserTokens from './user.tokens';
import GetUserByIdUseCaseInput from './usecases/dtos/getUserByIdUseCaseInput';
import { IUseCase } from 'src/domain/iusecase.interface';

@Controller('user')
export class UserController {

  @Inject(UserTokens.getUserByIdUseCase)
  private readonly getUserByIdUseCase: IUseCase<GetUserByIdUseCaseInput, GetUserByIdUseCaseOutput>;

  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<GetUserByIdUseCaseOutput> {
    try {
      const useCaseInput = new GetUserByIdUseCaseInput({ id });
      return await this.getUserByIdUseCase.run(useCaseInput);
    } catch (error) {
      if (error.message) {
        try {
          const parsedMessage = JSON.parse(error.message);
          throw new BadRequestException(parsedMessage);
        } catch (parseError) {
          throw new BadRequestException(error.message);
        }
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
  }
}
