import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMemberDto } from './dto/create-member-dto';
import { GetMemberDto } from './dto/get-member-dto';

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

  sayHello() {
    return this.client.emit('hello', 'Hello from RabbitMQ!'); // this.client.emit(pattern, data)
  }
}
