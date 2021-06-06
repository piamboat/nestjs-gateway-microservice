import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member-dto';
import { GetMemberDto } from './dto/get-member-dto';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post('/new')
  createMember(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.createMember(createMemberDto);
  }

  @Get('/all')
  getMembers(@Query(ValidationPipe) getMemberDto: GetMemberDto) {
    return this.memberService.getMembers(getMemberDto);
  }

  @Get('/hello')
  sayHello() {
    return this.memberService.sayHello();
  }
}
