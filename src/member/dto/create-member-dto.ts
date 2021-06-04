import { IsNotEmpty } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;
}
