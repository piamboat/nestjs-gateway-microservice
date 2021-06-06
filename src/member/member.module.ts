import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MEMBER_SERVICE',
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
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
