import { Module } from '@nestjs/common';
import { RocketModule } from './rocket/rocket.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [RocketModule, MemberModule],
})
export class AppModule {}
