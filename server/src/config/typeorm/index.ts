import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join, resolve } from 'path';

import { TYPEORM } from '@environments';

export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options: TypeOrmModuleOptions = {
      ...TYPEORM,
      type: 'postgres',
      entities: [
        resolve(__dirname, '..', '..', '**', 'entities', '*.entity.{ts,js}'),
      ],
      migrations: [resolve(__dirname, '..', 'migrations', '*.{ts,js}')],
      cli: {
        migrationsDir: join('src', 'migrations'),
      },
    };

    return options;
  }
}
