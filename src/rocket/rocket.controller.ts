import { Body, Controller, Get, Post } from '@nestjs/common';
import { RocketService } from './rocket.service';

@Controller('rocket')
export class RocketController {
  constructor(private rocketService: RocketService) {}

  @Get('/next-launch')
  getNextLaunchRemainingTime() {
    return this.rocketService.getNextLaunchRemainingTime();
  }

  @Get('/sum')
  getSumNumber(@Body() numbers: number[]) {
    return this.rocketService.getSumNumber(numbers);
  }
}
