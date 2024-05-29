import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../../address/interfaces/address.entity';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column()
    phone: string;

    @Column({ nullable: false })
    cpf: string;

    @Column()
    password: string;

    @Column()
    type: number;

    @Column()
    username: string;

    @Column()
    avatar: string;

    @Column()
    description: string;

    @Column()
    birthplace: string;

    @Column()
    gender: string;

    @Column()
    language: string;

    @Column()
    profession: string;

    @Column()
    company: string;

    @Column()
    website: string;

    @Column()
    relationship: string;

    @Column()
    birthdate: string;

    @Column()
    status: number;

    @Column()
    active: boolean;

    @Column()
    whatsApp: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;

    @OneToMany(() => AddressEntity, (address) => address.user)
    addresses: AddressEntity[];

    @OneToMany(() => AddressEntity, (address) => address.createdBy)
    createdAddresses: AddressEntity[];
}
