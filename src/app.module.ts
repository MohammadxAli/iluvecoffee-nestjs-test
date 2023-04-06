import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestTypeOrmCommandsModule } from 'nestjs-typeorm-commands';

@Module({
    imports: [
        CoffeesModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'pass123',
            database: 'postgres',
            autoLoadEntities: true,
            migrations: ['dist/migrations/*.js'],
        }),
        NestTypeOrmCommandsModule.forRoot({
            migrationsDir: 'src/migrations',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
