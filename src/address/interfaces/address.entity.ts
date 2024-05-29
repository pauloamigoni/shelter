import { UserEntity } from 'src/user/interfaces/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('address')
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postalCode: string;

    @ManyToOne(() => UserEntity, user => user.addresses, { nullable: true })
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @ManyToOne(() => UserEntity, user => user.createdAdresses)
    createdBy: UserEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
