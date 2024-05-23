import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env.development.local',
});

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/**/*.entity.js`], // Ajuste para .js
    migrations: [`${__dirname}/migration/**/*.js`], // Ajuste para .js
    synchronize: false,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
