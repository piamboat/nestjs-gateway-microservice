import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMemberDto } from './dto/create-member-dto';
import { GetMemberDto } from './dto/get-member-dto';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService {
  constructor(@Inject('MEMBER_SERVICE') private client: ClientProxy) {}

  createMember(createMemberDto: CreateMemberDto) {
    return this.client.send<string, CreateMemberDto>(
      'create-member', // message pattern
      createMemberDto, // body of our message (data)
    );
  }

  getMembers(getMemberDto: GetMemberDto) {
    return this.client.send<string, GetMemberDto>('get-members', getMemberDto);
  }
}
