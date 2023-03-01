import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'family',
      password: '123456',
      database: 'project',
      entities: [UserEntity],
      synchronize: false,
      extra: {
        trustServerCertificate: true,
      },
      requestTimeout: 5000
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule { }