import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';

 
dotenv.config();
 
export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '4675', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Category, Product],
  migrations: ['src/migrations/*.ts'],
});
