import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // type of our database
  host: 'localhost', // database host
  port: 5432, // database host
  username: 'postgres', // username
  password: 'pass123', // user password
  database: 'postgres', // name of our database,
  autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
  synchronize: true,
};
