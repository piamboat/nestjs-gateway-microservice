import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RocketController } from './rocket.controller';
import { RocketService } from './rocket.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ROCKET_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://ykihgmxy:bHDLrFmm59AVzPvKV_gjhC2t9LrTDcTd@gerbil.rmq.cloudamqp.com/ykihgmxy',
          ],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [RocketController],
  providers: [RocketService],
})
export class RocketModule {}
