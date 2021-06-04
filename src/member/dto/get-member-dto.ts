import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetMemberDto {
  @IsOptional()
  @IsNotEmpty()
  firstname: string;

  @IsOptional()
  @IsNotEmpty()
  lastname: string;
}
