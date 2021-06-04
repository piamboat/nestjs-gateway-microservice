import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RocketController } from './rocket.controller';
import { RocketService } from './rocket.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ROCKET_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877,
        },
      },
    ]),
  ],
  controllers: [RocketController],
  providers: [RocketService],
})
export class RocketModule {}
