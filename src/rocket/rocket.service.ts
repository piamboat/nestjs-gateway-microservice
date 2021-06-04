import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RocketService {
  constructor(@Inject('ROCKET_SERVICE') private client: ClientProxy) {}

  getNextLaunchRemainingTime() {
    return this.client.send<string, string>(
      'get-next-launch-remaining-time', // message pattern
      '', // body of our message (data)
    );
  }

  getSumNumber(numbers: number[]): Observable<number> {
    return this.client.send<number>({ cmd: 'sum' }, numbers);
  }
}
