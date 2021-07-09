import {Module} from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";
import { TypeOrmModule } from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import TypeOrmConfig from "./typeorm.config";

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10,
        }),
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfig
        }),
    ],
    exports: [],
    providers: [TypeOrmConfig]
})
export default class AppModule {}