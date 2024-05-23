import { UserEntity } from './user.entity';

export default interface IUserRepository {
    getUserById(id: number): Promise<UserEntity | null>;
    createUser(user: Partial<UserEntity>): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
}
