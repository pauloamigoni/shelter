import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { PetModule } from './pet/pet.module';
import { PhotosPetModule } from './photos_pet/photos_pet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity.js`],
      migrations: [`${__dirname}/migration/**/*.js`],
      migrationsRun: true,
      synchronize: true,
    }),
    UserModule,
    AddressModule,
    PetModule,
    PhotosPetModule
  ],
})
export class AppModule { }
